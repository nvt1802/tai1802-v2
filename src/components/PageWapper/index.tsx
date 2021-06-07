import React from "react"
import { makeStyles } from "@material-ui/core"

export default function PageWapper({ children }: any) {
  const classes = useStyles()

  return <div className={classes.page}>{children}</div>
}

const useStyles = makeStyles(() => ({
  page: {
    minHeight: "100vh",
    paddingTop: "5em",
  },
}))
