import React from "react"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'


export const wrapRootElement = ({ element }) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LeHTQMgAAAAAK2LcI8J5hEjfmGnocRiKZryrgck">
            { element }
        </GoogleReCaptchaProvider>
    )
}