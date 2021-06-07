import React, { FC, Fragment } from "react"

interface WhenProps {
  condition: boolean
  children?: any
}

const When: FC<WhenProps> = ({ condition, children }) => {
  if (condition === true) {
    return <Fragment>{children}</Fragment>
  } else {
    return <Fragment></Fragment>
  }
}

export default When
