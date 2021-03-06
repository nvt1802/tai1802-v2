import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Grid,
  Avatar,
} from "@material-ui/core"
import { Menu as MenuIcon, ExitToApp as LogoutIcon } from "@material-ui/icons"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTranslation } from "react-i18next"
import Sidebar from "layout/sidebar"
import When from "components/Condition/When"
import { Link } from "react-router-dom"
import DialogConfirm from "components/DialogConfirm"
import CustomizedMenus from "layout/menu"
import Logo from "components/Logo"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header(props: any) {
  const { user, signOut } = props
  const classes = useStyles()
  const { t } = useTranslation(["header", "common"])
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [isShowDialog, setDialog] = useState(false)
  const maxMm = useMediaQuery("(max-width:910px)")
  const minLg = useMediaQuery("(min-width:910px)")

  useEffect(() => {
    const headerElement = document.getElementsByTagName("header")[0]
    const homePageElement = document.getElementById("home-page")
    headerElement.style.zIndex = "1500"
    headerElement.style.backgroundColor = "transparent"
    headerElement.style.boxShadow = "unset"
    headerElement.style.color = "white"
    if (homePageElement !== null) {
      homePageElement.style.color = "white"
    }
    window.addEventListener("scroll", headerColorChange)
  }, [])

  const headerColorChange = () => {
    const headerElement = document.getElementsByTagName("header")[0]
    const homePageElement = document.getElementById("home-page")
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > 120) {
      headerElement.style.backgroundColor = "white"
      headerElement.style.boxShadow =
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
      headerElement.style.color = "black"
      headerElement.style.borderRadius = "0 0 10px 10px"
      if (homePageElement !== null) {
        homePageElement.style.color = "black"
      }
    } else {
      headerElement.style.backgroundColor = "transparent"
      headerElement.style.boxShadow = "unset"
      headerElement.style.color = "white"
      if (homePageElement !== null) {
        homePageElement.style.color = "white"
      }
    }
  }

  const toggleDrawer = () => () => {
    setOpenSidebar(!isOpenSidebar)
  }

  const handleLogout = () => {
    setDialog(true)
  }

  const handleConfirm = () => {
    setDialog(false)
    signOut()
  }

  const handleCloseDialog = () => {
    setDialog(false)
  }

  const renderToolBar = () => (
    <Toolbar
      style={{
        alignItems: "center",
        paddingLeft: "4em",
        paddingRight: "4em",
      }}
    >
      <div className={classes.title}>
        <div style={{ display: "flex" }}>
          <Logo />
          <div
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0.5em",
            }}
          >
            <Typography variant="h6">
              <Link
                to="/"
                id="home-page"
                style={{ textDecoration: "none", margin: "auto" }}
              >
                {t("header:title_page")}
              </Link>
            </Typography>
          </div>
        </div>
      </div>

      <When condition={typeof user !== "undefined" && user !== null}>
        <div>
          <When condition={minLg && !maxMm}>
            <Grid container>
              <Grid style={{ margin: "auto" }}>
                <MenuItem>
                  <Avatar alt={user?.displayName} src={user?.photoURL} />
                  <span style={{ marginLeft: "0.5em" }}>
                    {user?.displayName}
                  </span>
                </MenuItem>
              </Grid>

              <Grid style={{ margin: "auto" }}>
                <CustomizedMenus t={t} />
              </Grid>

              <Grid style={{ margin: "auto" }}>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon fontSize="small" />
                  <span style={{ marginLeft: "0.5em" }}>
                    {t("header:btn_logout")}
                  </span>
                </MenuItem>
              </Grid>
            </Grid>
          </When>
        </div>
      </When>

      <When condition={!minLg && maxMm}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer()}
        >
          <MenuIcon />
        </IconButton>
      </When>
    </Toolbar>
  )

  return (
    <div>
      <AppBar position={"fixed"}>{renderToolBar()}</AppBar>
      <Sidebar
        user={user}
        handleLogout={handleLogout}
        isOpen={isOpenSidebar}
        toggleDrawer={toggleDrawer}
      />
      <DialogConfirm
        open={isShowDialog}
        handleClickConfirm={handleConfirm}
        handleClose={handleCloseDialog}
        title={t("common:title_logout")}
        content={t("common:text_logout")}
        labelBtnClose={t("common:lbl_close")}
        labelBtnConfirm={t("common:btn_confirm")}
      />
    </div>
  )
}
