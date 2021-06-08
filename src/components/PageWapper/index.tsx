import React, { FC } from "react"
import { makeStyles } from "@material-ui/core"

interface PageWapperProps {
  children?: any
}

const PageWapper: FC<PageWapperProps> = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.page}>{children}</div>
}

const useStyles = makeStyles(() => ({
  page: {
    minHeight: "100vh",
    paddingTop: "5em",
  },
}))

export default PageWapper
