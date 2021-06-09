import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"

interface FlowerDIconProps {
  width?: string
  height?: string
  color?: string
  duration?: number
}

const FlowerDIcon: FC<FlowerDIconProps> = ({
  width = "40px",
  height = "40px",
  color = "black",
  duration = 5,
}) => {
  const useStyles = makeStyles({
    animate: {
      animation: `$spin ${duration}s infinite linear`,
    },
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  })

  const classes = useStyles()

  return (
    <svg
      className={classes.animate}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 496.013 496.013"
      version="1.1"
      viewBox="0 0 496.013 496.013"
      xmlSpace="preserve"
    >
      <g fill={color}>
        <path d="M493.666 242.35l-39.2-39.2a119.752 119.752 0 00-34.064-23.784 127.55 127.55 0 0011.608-53.064V72.006a8 8 0 00-8-8h-54.296a127.55 127.55 0 00-53.072 11.6 119.752 119.752 0 00-23.784-34.064l-39.2-39.2a8 8 0 00-11.312 0l-39.2 39.2a119.752 119.752 0 00-23.784 34.064 127.56 127.56 0 00-53.056-11.6H72.01a8 8 0 00-8 8v54.296a127.554 127.554 0 0011.6 53.072 119.752 119.752 0 00-34.064 23.784l-39.2 39.2a8 8 0 000 11.312l39.2 39.2a119.752 119.752 0 0034.064 23.784 127.56 127.56 0 00-11.6 53.056v54.296a8 8 0 008 8h54.296a127.55 127.55 0 0053.072-11.6 119.752 119.752 0 0023.784 34.064l39.2 39.2a8 8 0 0011.312 0l39.2-39.2a119.752 119.752 0 0023.784-34.064 127.544 127.544 0 0053.056 11.6h54.296a8 8 0 008-8V369.71a127.554 127.554 0 00-11.6-53.072 119.752 119.752 0 0034.064-23.784l39.2-39.2a8 8 0 00-.008-11.304zM322.53 90.518a111.515 111.515 0 0147.184-10.512h46.296v46.296a111.522 111.522 0 01-10.504 47.2 120.16 120.16 0 00-35.896-5.496h-3.2a119.529 119.529 0 00-48.8 10.4 119.529 119.529 0 0010.4-48.8v-3.2a120.133 120.133 0 00-5.48-35.888zm43.88 93.488h3.2c9.45.019 18.853 1.322 27.952 3.872a112.894 112.894 0 01-14.4 17.6l-1.696 1.696a111.305 111.305 0 01-79.2 32.8l-34.944.032 25.536-25.536a103.33 103.33 0 0173.552-30.464zm-54.4-57.6v3.2a103.328 103.328 0 01-30.464 73.544l-25.536 25.544V193.71a111.305 111.305 0 0132.8-79.2l1.696-1.696a112.951 112.951 0 0117.6-14.4 104.351 104.351 0 013.904 27.992zm-97.536-73.552l33.536-33.536 33.536 33.536a103.75 103.75 0 0120.984 30.352 128.518 128.518 0 00-23.32 18.296l-1.696 1.696a127.473 127.473 0 00-29.504 46.2 127.478 127.478 0 00-29.496-46.192l-1.696-1.696a128.537 128.537 0 00-23.328-18.304 103.776 103.776 0 0120.984-30.352zm-30.464 73.552a104.359 104.359 0 013.872-27.952 112.894 112.894 0 0117.6 14.4l1.696 1.696a111.305 111.305 0 0132.8 79.2v34.984l-25.536-25.536a103.33 103.33 0 01-30.432-73.592v-3.2zm19.144 88.064l25.544 25.536h-34.984a111.305 111.305 0 01-79.2-32.8l-1.696-1.696a112.951 112.951 0 01-14.4-17.6 104.431 104.431 0 0127.992-3.904h3.2a103.327 103.327 0 0173.544 30.464zM80.01 80.006h46.296a111.522 111.522 0 0147.2 10.504 120.16 120.16 0 00-5.496 35.896v3.2a119.529 119.529 0 0010.4 48.8 119.529 119.529 0 00-48.8-10.4h-3.2a120.165 120.165 0 00-35.888 5.48 111.515 111.515 0 01-10.512-47.184V80.006zM52.858 281.542l-33.536-33.536 33.536-33.536a103.75 103.75 0 0130.352-20.984 128.518 128.518 0 0018.296 23.32l1.696 1.696a127.473 127.473 0 0046.2 29.504 127.478 127.478 0 00-46.192 29.496l-1.696 1.696a128.537 128.537 0 00-18.304 23.328 103.776 103.776 0 01-30.352-20.984zM173.49 405.494a111.515 111.515 0 01-47.184 10.512H80.01V369.71a111.522 111.522 0 0110.504-47.2 120.16 120.16 0 0035.896 5.496h3.2a119.529 119.529 0 0048.8-10.4 119.529 119.529 0 00-10.4 48.8v3.2a120.197 120.197 0 005.48 35.888zm-43.88-93.488h-3.2a104.399 104.399 0 01-27.952-3.872 112.894 112.894 0 0114.4-17.6l1.696-1.696a111.305 111.305 0 0179.2-32.8l34.944-.032-25.536 25.536a103.328 103.328 0 01-73.552 30.464zm54.4 57.6v-3.2a103.328 103.328 0 0130.464-73.544l25.536-25.544v34.984a111.305 111.305 0 01-32.8 79.2l-1.696 1.696a112.894 112.894 0 01-17.6 14.4 104.42 104.42 0 01-3.904-27.992zm97.536 73.552l-33.536 33.536-33.536-33.536a103.758 103.758 0 01-20.984-30.312 128.506 128.506 0 0023.32-18.336l1.696-1.696a127.486 127.486 0 0029.504-46.2 127.478 127.478 0 0029.496 46.192l1.696 1.696a128.526 128.526 0 0023.328 18.336 103.744 103.744 0 01-20.984 30.32zm30.464-73.552a104.399 104.399 0 01-3.872 27.952 112.894 112.894 0 01-17.6-14.4l-1.696-1.696a111.305 111.305 0 01-32.8-79.2v-34.944l25.536 25.536a103.326 103.326 0 0130.432 73.552v3.2zm-19.144-88.064l-25.544-25.536h34.984a111.305 111.305 0 0179.2 32.8l1.696 1.696a112.951 112.951 0 0114.4 17.6 104.386 104.386 0 01-27.992 3.904h-3.2a103.33 103.33 0 01-73.544-30.464zM416.01 416.006h-46.296a111.522 111.522 0 01-47.2-10.504 120.16 120.16 0 005.496-35.896v-3.2a119.529 119.529 0 00-10.4-48.8 119.529 119.529 0 0048.8 10.4h3.2a120.165 120.165 0 0035.888-5.48 111.515 111.515 0 0110.512 47.184v46.296zm27.152-134.464a103.758 103.758 0 01-30.312 20.984 128.472 128.472 0 00-18.336-23.32l-1.696-1.696a127.486 127.486 0 00-46.2-29.504 127.478 127.478 0 0046.192-29.496l1.696-1.696a128.526 128.526 0 0018.336-23.328 103.745 103.745 0 0130.312 20.984l33.544 33.536-33.536 33.536z"></path>
      </g>
    </svg>
  )
}

export default FlowerDIcon