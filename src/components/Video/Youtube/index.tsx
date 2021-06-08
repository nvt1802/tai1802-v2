import React, { Fragment, useEffect, useState } from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormControl,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { Search as SearchIcon } from "@material-ui/icons"
import { useTranslation } from "react-i18next"
import { data } from "model/data"
import { removeVietnameseTones } from "common/ConvertVie"
import clsx from "clsx"
import When from "components/Condition/When"
import PopupVideo from "components/Video/PopupVideo"
import { videosDBRef } from "model/realtime/videos"

const Youtube = () => {
  const matches = useMediaQuery("(min-width:700px)")
  const classes = useStyles(matches)
  const { t } = useTranslation(["videos"])
  const [loading, setLoading] = useState<boolean>(true)
  const [listVideo, setListVideo] = useState<any>([])
  const [keySearch, setKeySearch] = useState("")
  const [info, setInfo] = useState<any>({
    songNameVN: "",
    songNameCN: "",
    singNameVN: "",
    singNameCN: "",
    image: "",
    url: "",
  })
  const [isShowPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (listVideo?.length === 0) {
      videosDBRef.get().then((item) => {
        let arr: any[] = Object.keys(item.val()).map((row) => {
          return item.val()[row]
        })
        setListVideo(arr)
        setLoading(false)
      })
    }
  }, [listVideo])

  const handleOnChange = (event: any) => {
    setKeySearch(removeVietnameseTones(event.target.value) || "")
  }

  const handleOnKeyUp = () => {
    if (keySearch === "") {
      setListVideo(data)
    }
  }

  const handleOnClickShowPopup = () => {
    setShowPopup(!isShowPopup)
  }

  const handleOnKeyPress = (e: any) => {
    if (e.charCode === 13) {
      if (keySearch === "") {
        setListVideo(data)
      } else {
        setListVideo(
          data.filter((item) => {
            const songNameCN = item?.songNameCN || ""
            const songNameVN = removeVietnameseTones(item?.songNameVN || "")
            const singNameCN = item?.singNameCN || ""
            const singNameVN = removeVietnameseTones(item?.singNameVN || "")

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

  const handleClickSearch = () => {
    if (keySearch === "") {
      setListVideo(data)
    } else {
      setListVideo(
        data.filter((item) => {
          const songNameCN = item?.songNameCN || ""
          const songNameVN = removeVietnameseTones(item?.songNameVN || "")
          const singNameCN = item?.singNameCN || ""
          const singNameVN = removeVietnameseTones(item?.singNameVN || "")

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

  return (
    <Fragment>
      <div className={classes.row}>
        <div className={clsx(classes.colSize4, classes.mb1)}>
          <When condition={loading}>
            <CircularProgress />
          </When>
          <When condition={!loading}>
            <FormControl fullWidth style={{ marginBottom: "2em" }}>
              <TextField
                label={t("videos:lbl_search")}
                onChange={handleOnChange}
                onKeyUp={handleOnKeyUp}
                onKeyPress={handleOnKeyPress}
                size="small"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <Button
                      onClick={handleClickSearch}
                      variant="outlined"
                      style={{ marginRight: "-0.9em" }}
                    >
                      <SearchIcon />
                    </Button>
                  ),
                }}
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
              {listVideo.length !== 0 &&
                listVideo.map((item: any, index: number) => (
                  <ListItem
                    key={index}
                    className={classes.item}
                    onClick={() => {
                      setInfo(item)
                    }}
                  >
                    <ListItemText primary={item?.songNameVN} />
                  </ListItem>
                ))}
            </List>
          </When>
        </div>
        <div className={clsx(classes.colSize6, classes.mr1)}>
          <When condition={info?.songNameVN !== ""}>
            <Card style={{ width: "100%" }}>
              <CardContent>
                <div className={classes.row}>
                  <div className={classes.colSize3}>
                    <img
                      src={info?.image}
                      alt={info?.singNameVN}
                      width={"100%"}
                      height={"auto"}
                    />
                  </div>
                  <div className={clsx(classes.colSize7, classes.mr1)}>
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
                  </div>
                </div>
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
  colSize4: {
    flex: (matches) => `0 0 ${matches ? "38%" : "100%"}`,
    maxWidth: (matches) => `${matches ? "38%" : "100%"}`,
  },
  colSize6: {
    flex: (matches) => `0 0 ${matches ? "58%" : "100%"}`,
    maxWidth: (matches) => `${matches ? "58%" : "100%"}`,
  },
  colSize3: {
    flex: (matches) => `0 0 ${matches ? "38%" : "100%"}`,
    maxWidth: (matches) => `${matches ? "38%" : "100%"}`,
  },
  colSize7: {
    flex: (matches) => `0 0 ${matches ? "58%" : "100%"}`,
    maxWidth: (matches) => `${matches ? "58%" : "100%"}`,
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

export default Youtube
