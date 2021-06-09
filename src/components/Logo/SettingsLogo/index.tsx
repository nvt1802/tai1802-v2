import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@material-ui/core"
import React, { FC, Fragment, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { get as _get } from "lodash"
import { SETTING_CHANGE_SUCCESS } from "redux/actions/actionTypes"

import FlowerA from "components/Logo/FlowerA"
import FlowerB from "components/Logo/FlowerB"
import FlowerC from "components/Logo/FlowerC"
import FlowerD from "components/Logo/FlowerD"
import FlowerE from "components/Logo/FlowerE"
import FlowerF from "components/Logo/FlowerF"
import FlowerG from "components/Logo/FlowerG"
import FlowerH from "components/Logo/FlowerH"

const SettingsLogo: FC<any> = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation(["common", "settings"])
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem("logo") || "1"
  )
  const [duration, setDuration] = useState<string>(
    localStorage.getItem("duration") || "1"
  )
  const colorRef = useRef(null)

  const arrLogo = useMemo(
    () => [
      { label: <FlowerA duration={Number(duration)} />, value: "1" },
      { label: <FlowerB duration={Number(duration)} />, value: "2" },
      { label: <FlowerC duration={Number(duration)} />, value: "3" },
      { label: <FlowerD duration={Number(duration)} />, value: "4" },
      { label: <FlowerE duration={Number(duration)} />, value: "5" },
      { label: <FlowerF duration={Number(duration)} />, value: "6" },
      { label: <FlowerG duration={Number(duration)} />, value: "7" },
      { label: <FlowerH duration={Number(duration)} />, value: "8" },
    ],
    [duration]
  )

  const handleChangeLanguage = (event: any) => {
    setSelectedValue(event.target.value)
  }

  const handleOnchangeDuration = (e: any, value: any) => {
    setDuration(value)
  }

  const handleConfirm = () => {
    const color = _get(colorRef.current, "value", "black")
    localStorage.setItem("logo", selectedValue)
    localStorage.setItem("duration", duration)
    localStorage.setItem("color", color)
    dispatch({
      type: SETTING_CHANGE_SUCCESS,
      payload: {
        logo: selectedValue || "1",
        duration: duration || "5",
        color: color,
      },
    })
  }

  return (
    <Fragment>
      <FormControl
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "unset" }}
      >
        <div style={{ flex: "0 0 50%", maxWidth: "50%" }}>
          <Typography component="h6" variant="h6">
            {t("settings:title_logo")}
          </Typography>
          <RadioGroup
            aria-label="language"
            name="language"
            value={selectedValue}
            onChange={handleChangeLanguage}
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "unset",
            }}
          >
            {arrLogo.map((item, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={item?.value}
                  control={<Radio />}
                  label={item?.label}
                  style={{ flex: "0 0 45%", maxWidth: "45%" }}
                />
              )
            })}
          </RadioGroup>
        </div>
        <div style={{ flex: "0 0 50%", maxWidth: "50%" }}>
          <Typography component="h6" variant="h6">
            {t("settings:title_duration")}
          </Typography>
          <Slider
            defaultValue={5}
            valueLabelDisplay="auto"
            onChange={handleOnchangeDuration}
            step={0.5}
            min={0.5}
            max={10}
          />
          <Typography component="h6" variant="h6">
            {t("settings:title_color")}
          </Typography>
          <input type="color" ref={colorRef} />
        </div>
        <Button
          variant="contained"
          style={{ marginTop: "1em", backgroundColor: "green", color: "white" }}
          onClick={handleConfirm}
        >
          {t("common:btn_confirm")}
        </Button>
      </FormControl>
    </Fragment>
  )
}

export default SettingsLogo
