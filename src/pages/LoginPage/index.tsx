import React, { Fragment, useEffect, useState } from "react"
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Divider,
  FormHelperText,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import BackGroundLogin from "components/BackGroundLogin"
import {
  Visibility,
  VisibilityOff,
  Person,
  LockRounded,
} from "@material-ui/icons"
import "firebase/auth"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import ForgotPassowd from "components/ForgotPassowd"

const LoginPage = (props: any) => {
  const { history, user, signInWithGoogle, signInWithEmailAndPassword } = props
  const classes = useStyles()
  const { t } = useTranslation(["login", "common", "page"])
  const [showPassword, setShowPassword] = useState(false)
  const [focusEmail, setFocusEmail] = useState(false)
  const [focusPassword, setFocusPassword] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const oldPhotoURL = localStorage.getItem("photoURL") || ""
  const maxMd = useMediaQuery("(max-width:920px)")
  const minLg = useMediaQuery("(min-width:920px)")

  useEffect(() => {
    document.title = t("login:title")
  })

  const checkSize = () => {
    return maxMd && !minLg
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(
        t("common:validate.message_require", { field: t("login:lbl_email") })
      )
      .email(t("common:validate.email_format")),
    password: yup
      .string()
      .required(
        t("common:validate.message_require", { field: t("login:lbl_password") })
      )
      .min(6, t("common:validate.password_length")),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (user) {
      history?.push("/")
    }
  }, [history, user])

  const handleLoginWithGoogle = (event: any) => {
    event.preventDefault()
    signInWithGoogle()
  }

  const handleLoginWithFacebook = (event: any) => {
    event.preventDefault()
  }

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(data?.email, data?.password)
      .then((res: any) => history?.push("/"))
      .catch((error: any) => {
        setError("errorAfterSubmit", {
          type: "manual",
          message: t(`login:validate.${error?.code}`),
        })
      })
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <div
          className={checkSize() ? classes.hidden : classes.colSize6}
          style={{
            // backgroundColor: "green",
            height: "100vh",
            position: "relative",
          }}
        >
          <BackGroundLogin />
        </div>
        <div
          className={checkSize() ? classes.colSize12 : classes.colSize6}
          style={{
            // backgroundColor: "#dde4dd",
            height: "100vh",
          }}
        >
          <Container component="main" maxWidth="xs" className={classes.main}>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar} src={oldPhotoURL} />
              <Typography component="h1" variant="h5">
                {t("login:title")}
              </Typography>
              <form
                className={classes.form}
                noValidate
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label={t("login:lbl_email")}
                      type="email"
                      autoComplete="off"
                      error={errors.email ? true : false}
                      helperText={errors.email?.message}
                      InputProps={{
                        startAdornment: !focusEmail ? null : (
                          <Person
                            style={{ marginRight: "0.5em", width: "0.8em" }}
                          />
                        ),
                      }}
                      onFocus={() => setFocusEmail(true)}
                      onBlur={(event) => {
                        if (!event.target.value) {
                          setFocusEmail(false)
                        }
                      }}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label={t("login:lbl_password")}
                      type={!showPassword ? "password" : "text"}
                      autoComplete="off"
                      error={errors.password ? true : false}
                      helperText={errors.password?.message}
                      InputProps={{
                        startAdornment: !focusPassword ? null : (
                          <LockRounded
                            style={{ marginRight: "0.5em", width: "0.8em" }}
                          />
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onFocus={() => setFocusPassword(true)}
                      onBlur={(event) => {
                        if (!event.target.value) {
                          setFocusPassword(false)
                        }
                      }}
                    />
                  )}
                />
                <Button
                  type="submit"
                  fullWidth
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  {t("login:btn_sign_in")}
                </Button>
                <FormHelperText error style={{ textAlign: "center" }}>
                  {errors?.errorAfterSubmit?.message}
                </FormHelperText>
                <Grid container>
                  <Grid item xs={5} style={{ margin: "auto" }}>
                    <Divider />
                  </Grid>
                  <Grid item xs={2} style={{ textAlign: "center" }}>
                    OR
                  </Grid>
                  <Grid item xs={5} style={{ margin: "auto" }}>
                    <Divider />
                  </Grid>
                </Grid>
                <Grid container justify="space-between">
                  <Grid item xs={5} style={{ marginRight: "1em" }}>
                    <Button
                      type="button"
                      fullWidth
                      size="small"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleLoginWithFacebook}
                    >
                      Facebook
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      type="button"
                      fullWidth
                      size="small"
                      variant="contained"
                      color="inherit"
                      className={classes.submit}
                      onClick={handleLoginWithGoogle}
                    >
                      Google
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Link
                      to="#"
                      className={classes.link}
                      onClick={() => setShowForgotPassword(true)}
                    >
                      {t("login:lbl_forgot_password")}
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to="/register" className={classes.link}>
                      {t("login:lbl_sign_in")}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <ForgotPassowd
              status={showForgotPassword}
              setStatus={setShowForgotPassword}
            />
          </Container>
        </div>
      </div>
    </Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    // margin: theme.spacing(1),
    top: "-20px",
    width: "100px",
    height: "100px",
    border: "1px solid",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  main: {
    backgroundColor: "honeydew",
    opacity: "0.85",
    borderRadius: "3%",
  },
  link: {
    textDecoration: "none",
  },
  container: {
    display: "flex",
  },
  colSize6: {
    flex: "0 0 50%",
    maxWidth: "50%",
  },
  colSize12: {
    flex: "0 0 100%",
    maxWidth: "100%",
  },
  hidden: {
    display: "none",
  },
}))

export default LoginPage
