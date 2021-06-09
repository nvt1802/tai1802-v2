import React, { FC, useEffect } from "react"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
import { listQuestion } from "./source"
import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core"
import When from "components/Condition/When"

const TestPage: FC<any> = () => {
  const { t } = useTranslation("home")

  useEffect(() => {
    document.title = t("home:title")
  })

  return (
    <PageWrapper>
      <Paper style={{ margin: "0 1em 0 1em", paddingTop: "1em" }}>
        {listQuestion.map((item, index) => {
          return (
            <div style={{ margin: "0 1em 1em 1em"  }} key={index}>
              <TextField
                fullWidth
                multiline
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={`Câu ${index + 1}: ${item.question}`}
              />
              <RadioGroup name={index.toString()}>
                <When condition={item.A !== null}>
                  <FormControlLabel
                    value="A"
                    control={<Radio />}
                    label={`A. ${item.A?.toString()}`}
                  />
                </When>

                <When condition={item.B !== null}>
                  <FormControlLabel
                    value="B"
                    control={<Radio />}
                    label={`B. ${item.B?.toString()}`}
                  />
                </When>

                <When condition={item.C !== null}>
                  <FormControlLabel
                    value="C"
                    control={<Radio />}
                    label={`C. ${item.C?.toString()}`}
                  />
                </When>

                <When condition={item.D !== null}>
                  <FormControlLabel
                    value="D"
                    control={<Radio />}
                    label={`A. ${item.D?.toString()}`}
                  />
                </When>
              </RadioGroup>
            </div>
          )
        })}
      </Paper>
    </PageWrapper>
  )
}

export default TestPage
