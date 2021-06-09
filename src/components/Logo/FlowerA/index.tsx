import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"

interface FlowerAIconProps {
  width?: string
  height?: string
  color?: string
  duration?: number
}

const FlowerAIcon: FC<FlowerAIconProps> = ({
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
      enableBackground="new 0 0 457.378 457.378"
      version="1.1"
      viewBox="0 0 457.378 457.378"
      xmlSpace="preserve"
    >
      <g fill={color}>
        <path d="M78.856 208.152c3.542-1.944 7.191-3.746 11.003-5.337 15.102-6.291 32.065-9.488 50.396-9.488 10.17 0 20.056 1.014 29.424 2.575l-56.048-37.98 91.612 46.942a253.12 253.12 0 0116.745 6.343l.06-.166c-5.997-23.929-23.275-75.6-64.672-100.116-20.312-12.024-43.581-15.808-64.83-15.808-36.164 0-66.489 10.959-66.489 10.959s10.345 65.461 52.799 102.076z"></path>
        <path d="M107.582 281.036l60.732-29.775c13.909-13.609 27.675-23.548 36.488-29.274-16.236-5.886-39.708-12.37-64.554-12.37-14.659 0-29.792 2.252-44.128 8.233-58.871 24.523-82.477 102.309-82.477 102.309s41.088 21.745 86.575 21.745c7.019 0 14.148-.556 21.243-1.756.344-3.641.75-7.288 1.448-10.959 4.871-25.649 18.194-47.5 33.208-64.981l-48.535 16.828z"></path>
        <path d="M197.97 357.403l15.492-121.606c-19.268 12.587-65.197 47.169-74.558 96.431-11.904 62.653 40.084 125.15 40.084 125.15s69.109-38.02 82.499-99.082c-26.198-27.996-36.248-65.85-39.964-93.631l-23.553 92.738z"></path>
        <path d="M363.337 260.049c-2.117-1.914-4.427-3.475-6.666-5.187-12.632 3.814-26.293 5.855-40.945 5.855-15.403 0-29.995-2.2-42.898-5.052l58.474 60.019-83.259-66.842c-4.682-1.568-8.879-3.07-12.085-4.347 1.411 25.694 8.624 77.148 43.011 108.397 30.571 27.772 75.082 32.667 102.661 32.667 15.005 0 24.995-1.45 24.995-1.45s3.904-81.185-43.288-124.06z"></path>
        <path d="M351.492 171.612l-94.997 51.507a178.659 178.659 0 01-10.688 7.686c14.45 5.426 40.954 13.631 69.92 13.631 16.536 0 33.776-2.703 49.81-10.171 57.812-26.917 78.198-105.618 78.198-105.618s-38.273-18.277-81.313-18.277c-16.221.008-33.096 2.665-48.873 9.803-1.367 34.002-15.89 60.191-31.819 78.889l69.762-27.45z"></path>
        <path d="M229.579 180.53l4.804-78.77 4.375 71.578s.007-.008.007-.016l-.24 7.859-.675 34.753C283.832 184.091 344.771 99.134 234.383 0c0 0-53.759 44.398-61.664 101.647 29.665 20.666 47.117 52.971 56.86 78.883z"></path>
      </g>
    </svg>
  )
}

export default FlowerAIcon