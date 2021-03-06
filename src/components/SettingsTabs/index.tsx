import React, { Fragment, useState } from "react"
import { AppBar, Tab, Tabs, Box } from "@material-ui/core"
import {
  LanguageOutlined as LanguageIcon,
  ImageOutlined as LogoIcon,
} from "@material-ui/icons"
import { useTranslation } from "react-i18next"
import SetingLanguageForm from "components/Language/Form"
import LogoForm from "components/Logo/SettingsLogo"

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default function SettingsTabs() {
  const [value, setValue] = useState(0)

  const { t } = useTranslation(["common", "settings"])

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  return (
    <Fragment>
      <AppBar position="relative" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label={t("settings:title_setting_language")}
            icon={<LanguageIcon />}
          />
          <Tab label={t("settings:title_setting_logo")} icon={<LogoIcon />} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SetingLanguageForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogoForm />
      </TabPanel>
    </Fragment>
  )
}
