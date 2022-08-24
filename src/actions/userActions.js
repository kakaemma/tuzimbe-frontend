import { toast } from "react-toastify"
import axiosInstance from "../config/axiosInstance"
import { user_url } from "../config/configuration"
import { requestLoading } from "./requestLoading"

export const registerUser= userData=> dispatch=>{
    dispatch(requestLoading(true))
    axiosInstance.post(user_url, userData).then(response=>{
        dispatch(requestLoading(false))

        toast(response.data.message)
    }).catch(error=>{
        dispatch(requestLoading(false))
        toast.error(error.response.data.error)
        console.log(error)
    })
}