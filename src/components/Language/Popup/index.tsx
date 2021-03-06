import React, { Fragment, useMemo, useState } from "react"
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Tooltip,
} from "@material-ui/core"
import { useTranslation } from "react-i18next"
import LanguageIcon from "@material-ui/icons/LanguageRounded"
import ComboBox from "components/Combobox"

const LanguagePopup = () => {
  const { t, i18n } = useTranslation("common")
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "vn")
  const [open, setOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<any>(null)

  const handleChangeLanguage = (event: any, item: any) => {
    if (typeof item?.label === "undefined") {
      setCurrentLanguage({ label: "", value: "" })
    } else {
      i18n.changeLanguage(item?.value)
      localStorage.setItem("lng", item?.value)
      setLanguage(item?.value)
      setCurrentLanguage({
        label: t(`common:language.${item?.value}`),
        value: item?.value,
      })
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const arrLanguage: any[] = useMemo(
    () => [
      { label: t("common:language.cn"), value: "cn" },
      { label: t("common:language.en"), value: "en" },
      { label: t("common:language.jp"), value: "jp" },
      { label: t("common:language.kr"), value: "kr" },
      { label: t("common:language.vn"), value: "vn" },
    ],
    [t]
  )

  return (
    <Fragment>
      <Tooltip title={<Fragment>{t("common:tooltip_language")}</Fragment>}>
        <Button
          style={{ position: "fixed", bottom: "0.2em", right: "0.2em" }}
          onClick={handleClickOpen}
        >
          <Badge style={{ color: "brown" }} badgeContent={language}>
            <LanguageIcon style={{ color: "green" }} />
          </Badge>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {t("common:dialog_title_language")}
        </DialogTitle>
        <DialogContent style={{ width: "440px" }}>
          <DialogContentText>
            {t("common:title_change_language")}
          </DialogContentText>
          <form noValidate>
            <FormControl fullWidth>
              <ComboBox
                id={"language"}
                label={t("common:title_language")}
                options={arrLanguage}
                onChange={handleChangeLanguage}
                width={390}
                value={currentLanguage}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t("common:lbl_close")}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default LanguagePopup
