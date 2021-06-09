import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core"
import React, { FC, Fragment, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
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

  const arrLogo = useMemo(
    () => [
      { label: <FlowerA />, value: "1" },
      { label: <FlowerB />, value: "2" },
      { label: <FlowerC />, value: "3" },
      { label: <FlowerD />, value: "4" },
      { label: <FlowerE />, value: "5" },
      { label: <FlowerF />, value: "6" },
      { label: <FlowerG />, value: "7" },
      { label: <FlowerH />, value: "8" },
    ],
    []
  )

  const handleChangeLanguage = (event: any) => {
    setSelectedValue(event.target.value)
  }

  const handleConfirm = () => {
    localStorage.setItem("logo", selectedValue)
    dispatch({
      type: SETTING_CHANGE_SUCCESS,
      payload: {
        logo: selectedValue || "1",
        duration: "5",
        color: "black",
      },
    })
  }

  return (
    <Fragment>
      <FormControl>
        <RadioGroup
          aria-label="language"
          name="language"
          value={selectedValue}
          onChange={handleChangeLanguage}
        >
          {arrLogo.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item?.value}
                control={<Radio />}
                label={item?.label}
              />
            )
          })}
        </RadioGroup>
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
