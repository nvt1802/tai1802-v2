import React, { useEffect } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import PageWrapper from "components/PageWapper"
import Error from "components/Error"
import When from "components/Condition/When"

export default function _403Page(props?: any) {
  console.log(props)
  const { history, user } = props
  const classes = useStyles()
  const { t } = useTranslation("error")

  useEffect(() => {
    document.title = t("error:403.title")
  })

  const handleGoBack = (e: any) => {
    e.preventDefault()
    history.goBack()
  }

  return (
    <PageWrapper>
      <Error className={clsx(classes.svg, classes.animatedItem)} />
      <div className={classes.messageBox}>
        <h1 className={classes.h1}>403</h1>
        <p>{t("error:403.lbl_content_error")}</p>
        <div className={classes.buttonsConActionLinkWrap}>
          <div style={{ display: "flex" }}>
            <When condition={user === null}>
              <Link to="/login" className={classes.buttonsConActionLinkWrapA}>
                {t("error:403.lbl_go_to_login")}
              </Link>
            </When>
            <When condition={user !== null}>
              <a
                href="/"
                onClick={handleGoBack}
                className={classes.buttonsConActionLinkWrapA}
              >
                {t("error:403.lbl_back_page")}
              </a>
            </When>
            <When condition={user !== null}>
              <Link to="/" className={classes.buttonsConActionLinkWrapA}>
                {t("error:403.lbl_back_to_home")}
              </Link>
            </When>
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
