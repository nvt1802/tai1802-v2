import React, { FC, useEffect } from "react"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
import Sodoku from "components/Sodoku"

const GamePage: FC<any> = () => {
  const { t } = useTranslation("header")

  useEffect(() => {
    document.title = t("header:btn_sodoku")
  })

  return (
    <PageWrapper>
      <Sodoku />
    </PageWrapper>
  )
}

export default GamePage
