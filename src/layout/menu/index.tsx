import React, { FC, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import { MenuItem, MenuProps, Menu, ListItemIcon } from "@material-ui/core"
import {
  Apps as AppsIcon,
  Settings as SettingsIcon,
  VideoLibrary as VideoLibraryIcon,
  AccountBox as AccountBoxIcon,
} from "@material-ui/icons"
import { Link } from "react-router-dom"

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

const CustomizedMenus: FC<any> = ({ t }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <MenuItem onClick={handleClick}>
        <AppsIcon fontSize="small" />
        <span style={{ marginLeft: "0.5em" }}>{t("header:btn_apps")}</span>
      </MenuItem>
      <StyledMenu
        style={{ zIndex: 1600 }}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="small" />
            <Link
              to="/videos"
              id="videos-page"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleClose}
            >
              <span style={{ marginLeft: "0.5em" }}>
                {t("header:btn_videos")}
              </span>
            </Link>
          </ListItemIcon>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            <Link
              to="/settings"
              id="settings-page"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleClose}
            >
              <span style={{ marginLeft: "0.5em" }}>
                {t("header:btn_setting")}
              </span>
            </Link>
          </ListItemIcon>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
            <Link
              to="/about"
              id="about-page"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleClose}
            >
              <span style={{ marginLeft: "0.5em" }}>
                {t("header:btn_about")}
              </span>
            </Link>
          </ListItemIcon>
        </StyledMenuItem>
      </StyledMenu>
    </Fragment>
  )
}

export default CustomizedMenus
