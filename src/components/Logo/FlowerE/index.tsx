import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"

interface FlowerEIconProps {
  width?: string
  height?: string
  color?: string
  duration?: number
}

const FlowerEIcon: FC<FlowerEIconProps> = ({
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
      viewBox="0 0 74 74"
    >
      <g fill={color}>
        <path d="M61.05 62.05a24.794 24.794 0 01-17.719-7.365 1 1 0 111.419-1.409 22.79 22.79 0 0015.278 6.752A23.11 23.11 0 0041.3 38.4a1 1 0 11.37-1.966A25.106 25.106 0 0162.05 61.05a1 1 0 01-1 1zM12.95 62.05a1 1 0 01-1-1 24.794 24.794 0 017.365-17.719 1 1 0 111.409 1.419 22.79 22.79 0 00-6.752 15.278A23.11 23.11 0 0035.6 41.3a1 1 0 111.966.37A25.106 25.106 0 0112.95 62.05zM32.521 37.58a1.011 1.011 0 01-.186-.017A25.106 25.106 0 0111.95 12.95a1 1 0 011-1 24.794 24.794 0 0117.719 7.365 1 1 0 11-1.419 1.409 22.79 22.79 0 00-15.278-6.752A23.11 23.11 0 0032.7 35.6a1 1 0 01-.184 1.983zM37.421 33.52a1.011 1.011 0 01-.186-.017 1 1 0 01-.8-1.168A25.106 25.106 0 0161.05 11.95a1 1 0 011 1 24.794 24.794 0 01-7.365 17.719 1 1 0 11-1.409-1.419 22.79 22.79 0 006.752-15.278A23.11 23.11 0 0038.4 32.7a1 1 0 01-.979.82z"></path>
        <path d="M37 72a1 1 0 01-.707-.293A24.9 24.9 0 0128.96 53.98a1 1 0 012 0A22.9 22.9 0 0037 69.554a23.057 23.057 0 002.045-28.53A1 1 0 0140.7 39.9a25.054 25.054 0 01-2.988 31.812A1 1 0 0137 72zM20.02 45.04a24.9 24.9 0 01-17.727-7.333 1 1 0 010-1.414A24.9 24.9 0 0120.02 28.96a1 1 0 010 2A22.9 22.9 0 004.446 37a23.057 23.057 0 0028.53 2.045A1 1 0 1134.1 40.7a24.84 24.84 0 01-14.08 4.34zM34.131 34.54a1 1 0 01-.831-.44 25.054 25.054 0 012.993-31.807 1 1 0 011.414 0A24.9 24.9 0 0145.04 20.02a1 1 0 01-2 0A22.9 22.9 0 0037 4.446a23.057 23.057 0 00-2.045 28.53 1 1 0 01-.824 1.564zM53.98 45.04a1 1 0 010-2A22.9 22.9 0 0069.554 37a23.057 23.057 0 00-28.53-2.045A1 1 0 0139.9 33.3a25.054 25.054 0 0131.812 2.988 1 1 0 010 1.414A24.9 24.9 0 0153.98 45.04z"></path>
        <path d="M37 42.5a5.5 5.5 0 115.5-5.5 5.506 5.506 0 01-5.5 5.5zm0-9a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5z"></path>
      </g>
    </svg>
  )
}

export default FlowerEIcon