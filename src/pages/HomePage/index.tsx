import React, { FC, useEffect } from "react"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
const HomePage: FC<any> = () => {
  const { t } = useTranslation("home")

  useEffect(() => {
    document.title = t("home:title")
  })

  return <PageWrapper></PageWrapper>
}

export default HomePage
