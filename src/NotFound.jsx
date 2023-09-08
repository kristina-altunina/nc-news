import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api"

const NotFound = ({message}) => {
    return (
        <div>Not Found {message}</div>
    )
}

export default NotFound;

