import React, { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
import { SETTING_CHANGE_SUCCESS } from "redux/actions/actionTypes"

const HomePage = (props: any) => {
  const { t } = useTranslation("home")
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = t("home:title")
  })

  const handleChangeSettings = () => {
    dispatch({
      type: SETTING_CHANGE_SUCCESS,
      payload: {
        logo: "2",
        duration: "10",
        color: "black",
      },
    })
  }

  return (
    <PageWrapper>
      <button onClick={handleChangeSettings}>TEST</button>
    </PageWrapper>
  )
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
