import React, { FC, Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core"
import {
  ExitToApp as LogoutIcon,
  Settings as SettingsIcon,
  VideoLibrary as VideoLibraryIcon,
  AccountBox as AccountBoxIcon,
  GamesOutlined as GamesIcon,
} from "@material-ui/icons"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

interface SidebarProps {
  user: any
  handleLogout: any
  isOpen: any
  toggleDrawer: any
}

const Sidebar: FC<SidebarProps> = ({
  user,
  handleLogout,
  isOpen,
  toggleDrawer,
}) => {
  const classes = useStyles()
  const { t } = useTranslation(["header", "common"])

  const handlePushPageSettings = () => {
    document.getElementById("pushSettings")?.click()
  }

  const handlePushPageVideos = () => {
    document.getElementById("pushVideos")?.click()
  }

  const handlePushPageAbout = () => {
    document.getElementById("pushAbout")?.click()
  }

  const handlePushPageGames = () => {
    document.getElementById("pushGames")?.click()
  }

  const list = (props?: any) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Avatar alt={user?.displayName} src={user?.photoURL} />
          </ListItemIcon>
          <ListItemText primary={user?.displayName} />
        </ListItem>
      </List>

      <Divider />

      <List onClick={handlePushPageVideos}>
        <ListItem button>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_videos")} />
        </ListItem>
      </List>

      <List onClick={handlePushPageSettings}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_setting")} />
        </ListItem>
      </List>

      <List onClick={handlePushPageAbout}>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_about")} />
        </ListItem>
      </List>

      <List onClick={handlePushPageGames}>
        <ListItem button>
          <ListItemIcon>
            <GamesIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_sodoku")} />
        </ListItem>
      </List>

      <List onClick={handleLogout}>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_logout")} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <Fragment>
      <SwipeableDrawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        style={{ zIndex: 1600 }}
      >
        {list()}
      </SwipeableDrawer>
      <Link to="/settings" id="pushSettings" style={{ display: "none" }} />
      <Link to="/videos" id="pushVideos" style={{ display: "none" }} />
      <Link to="/about" id="pushAbout" style={{ display: "none" }} />
      <Link to="/games" id="pushGames" style={{ display: "none" }} />
    </Fragment>
  )
}

export default Sidebar
