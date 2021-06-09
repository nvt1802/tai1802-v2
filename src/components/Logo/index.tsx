import React, { FC, Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SETTING_CHANGE_SUCCESS } from "redux/actions/actionTypes"
import { get as _get } from "lodash"

import FlowerA from "components/Logo/FlowerA"
import FlowerB from "components/Logo/FlowerB"
import FlowerC from "components/Logo/FlowerC"
import FlowerD from "components/Logo/FlowerD"
import FlowerE from "components/Logo/FlowerE"
import FlowerF from "components/Logo/FlowerF"
import FlowerG from "components/Logo/FlowerG"
import FlowerH from "components/Logo/FlowerH"

const Logo: FC<any> = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const [loading, setLoading] = useState<boolean>(true)
  const arrLogo = [
    { label: <FlowerA key="A" width="30px" height="30px" />, value: "1" },
    { label: <FlowerB key="B" width="30px" height="30px" />, value: "2" },
    { label: <FlowerC key="C" width="30px" height="30px" />, value: "3" },
    { label: <FlowerD key="D" width="30px" height="30px" />, value: "4" },
    { label: <FlowerE key="E" width="30px" height="30px" />, value: "5" },
    { label: <FlowerF key="F" width="30px" height="30px" />, value: "6" },
    { label: <FlowerG key="G" width="30px" height="30px" />, value: "7" },
    { label: <FlowerH key="H" width="30px" height="30px" />, value: "8" },
  ]

  useEffect(() => {
    if (loading) {
      const logo = localStorage.getItem("logo")
      const duration = localStorage.getItem("duration")
      const color = localStorage.getItem("color")
      dispatch({
        type: SETTING_CHANGE_SUCCESS,
        payload: {
          logo: logo || "1",
          duration: duration || "5",
          color: color || "black",
        },
      })
      setLoading(false)
    }
  }, [loading, dispatch])
  return (
    <Fragment>
      {arrLogo.map((item, index) => {
        if (item?.value === _get(state, "settings.logo", "1")) {
          return item?.label
        } else {
          return <Fragment key={index} />
        }
      })}
    </Fragment>
  )
}

export default Logo
