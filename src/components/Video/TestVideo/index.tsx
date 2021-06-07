import React, { Fragment, useEffect, useState } from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { removeVietnameseTones } from "common/ConvertVie"
import clsx from "clsx"
import When from "components/Condition/When"
import PopupVideo from "components/Video/PopupVideo"
import { firestore } from "firebaseConfig"

const TestVideo = () => {
  const matches = useMediaQuery("(min-width:700px)")
  const classes = useStyles(matches)
  const { t } = useTranslation(["videos"])
  const [listVideo, setListVideo] = useState<any>([])
  const [listVideoResult, setListVideoResult] = useState<any>([])
  const [keySearch, setKeySearch] = useState("")
  const [info, setInfo] = useState<any>({
    songNameVN: "",
    songNameCN: "",
    singNameVN: "",
    singNameCN: "",
    url: "",
  })
  const [isShowPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (listVideo.length === 0) {
      fetchData()
    }
    return setListVideo([])
  }, [listVideo, setListVideo])

  const fetchData = () => {
    firestore
      .collection("videos")
      .get()
      .then((res) => {
        setListVideo(res.docs)
      })
  }

  const handleOnChange = (event: any) => {
    setKeySearch(removeVietnameseTones(event.target.value) || "")
  }

  const handleOnKeyUp = () => {
    if (keySearch === "") {
      fetchData()
    }
  }

  const handleOnClickShowPopup = () => {
    setShowPopup(!isShowPopup)
  }

  const handleOnKeyPress = (e: any) => {
    if (e.charCode === 13) {
      if (keySearch === "") {
        fetchData()
      } else {
        setListVideoResult(
          listVideo.filter((item: any) => {
            const songNameCN = item?.data()?.songNameCN || ""
            const songNameVN = removeVietnameseTones(
              item?.data()?.songNameVN || ""
            )
            const singNameCN = item?.data()?.singNameCN || ""
            const singNameVN = removeVietnameseTones(
              item?.data()?.singNameVN || ""
            )

            return (
              songNameCN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase()) ||
              songNameVN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase()) ||
              singNameCN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase()) ||
              singNameVN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase())
            )
          })
        )
      }
    }
  }

  return (
    <Fragment>
      <div className={classes.row}>
        <div className={clsx(classes.colSize, classes.mb1)}>
          <FormControl fullWidth style={{ marginBottom: "2em" }}>
            <TextField
              fullWidth
              label={t("videos:lbl_search")}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
              onKeyUp={handleOnKeyUp}
            />
          </FormControl>
          <List
            style={{
              maxHeight: 300,
              maxWidth: "100%",
              position: "relative",
              overflow: "auto",
            }}
          >
            <When condition={keySearch.length === 0}>
              {listVideo.length !== 0 &&
                listVideo.map((item: any, index: number) => (
                  <ListItem
                    key={index}
                    className={classes.item}
                    onClick={() => {
                      setInfo(item?.data())
                    }}
                  >
                    <ListItemText primary={item?.data()?.songNameVN} />
                  </ListItem>
                ))}
            </When>

            <When condition={keySearch.length !== 0}>
              {listVideoResult.length !== 0 &&
                listVideoResult.map((item: any, index: number) => (
                  <ListItem
                    key={index}
                    className={classes.item}
                    onClick={() => {
                      setInfo(item?.data())
                    }}
                  >
                    <ListItemText primary={item?.data()?.songNameVN} />
                  </ListItem>
                ))}
            </When>
          </List>
        </div>
        <div className={clsx(classes.colSize, classes.mr1)}>
          <When condition={info?.songNameVN !== ""}>
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  style={{ marginBottom: "1em" }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    {`${t("videos:lbl_song_name")}: `}{" "}
                  </span>
                  <span>{`${info?.songNameVN} (${info?.songNameCN})`}</span>
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ marginBottom: "1em" }}
                >
                  <span style={{ fontWeight: "bold" }}>{`${t(
                    "videos:lbl_singer_name"
                  )}: `}</span>
                  <span>{`${info?.singNameVN} (${info?.singNameCN})`}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  style={{ margin: "auto" }}
                  onClick={handleOnClickShowPopup}
                >
                  {t("videos:lbl_play_video")}
                </Button>
              </CardActions>
            </Card>
          </When>
        </div>
      </div>
      <PopupVideo item={info} open={isShowPopup} setOpen={setShowPopup} />
    </Fragment>
  )
}

const useStyles = makeStyles((matches) => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  colSize: {
    flex: (matches) => `0 0 ${matches ? "48%" : "100%"}`,
    maxWidth: (matches) => `${matches ? "48%" : "100%"}`,
  },
  mb1: {
    marginBottom: "1em",
  },
  mr1: {
    marginLeft: "1em",
  },
  item: {
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#e4e0e0",
    },
  },
}))

export default TestVideo
