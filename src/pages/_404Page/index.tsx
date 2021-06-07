import React, { useEffect } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import PageWrapper from "components/PageWapper"
import Error from "components/Error"

export default function _404Page(props: any) {
  const { history } = props
  const classes = useStyles()
  const { t } = useTranslation("error")

  useEffect(() => {
    document.title = t("error:404.title")
  })

  const handleGoBack = (e: any) => {
    e.preventDefault()
    history.goBack()
  }

  return (
    <PageWrapper>
      <Error className={clsx(classes.svg, classes.animatedItem)} />
      <div className={classes.messageBox}>
        <h1 className={classes.h1}>404</h1>
        <p>{t("error:404.title")}</p>
        <div className={classes.buttonsConActionLinkWrap}>
          <div style={{ display: "flex" }}>
            <a
              href="/"
              onClick={handleGoBack}
              className={classes.buttonsConActionLinkWrapA}
            >
              {t("error:404.lbl_back_page")}
            </a>
            <Link to="/" className={classes.buttonsConActionLinkWrapA}>
              {t("error:404.lbl_back_to_home")}
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    messageBox: {
      height: "200px",
      width: "380px",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-100px",
      marginLeft: "50px",
      color: "#fff",
      fontFamily: "Roboto",
      fontWeight: 300,
    },
    h1: {
      fontSize: "60px",
      lineHeight: "46px",
      marginBottom: "40px",
    },
    buttonsConActionLinkWrap: {
      marginTop: "40px",
    },
    buttonsConActionLinkWrapA: {
      background: "#68c950",
      padding: "8px 25px",
      borderRadius: "4px",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "14px",
      transition: "all 0.3s linear",
      cursor: "pointer",
      textDecoration: "none",
      marginRight: "10px",
      "& hover": {
        background: "#5a5c6c",
        color: "#fff",
      },
    },
    animatedItem: {
      animation: `$float 1s infinite ease-in-out alternate`,
    },
    "@keyframes float": {
      "100%": {
        transform: "translateY(20px)",
      },
    },
    svg: {
      position: "absolute",
      top: "50%",
      left: " 50%",
      marginTop: "-250px",
      marginLeft: "-400px",
    },
    "@media (max-width: 525px)": {
      svg: {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-250px",
        marginLeft: "-190px",
      },
      messageBox: {
        top: "50%",
        left: "50%",
        marginTop: "-100px",
        marginLeft: "-190px",
        textAlign: "center",
      },
    },
  })
)
