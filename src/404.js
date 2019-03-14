import React, {Fragment} from "react"
import {Link} from "react-router-dom"

const NotFound = ({error}) => (
  <Fragment>

    <p>{error ? error : 'Not Found'}</p>
  </Fragment>
)

export default NotFound;
