import { toast } from "react-toastify"
import axiosInstance from "../config/axiosInstance"
import { material_usage_url } from "../config/configuration"
import { requestLoading } from "./requestLoading"

export const registerMaterial= materialData=> dispatch=>{
    dispatch(requestLoading(true))
    axiosInstance.post(material_usage_url, materialData).then(response=>{
        dispatch(requestLoading(false))

        toast(response.data.message)
    }).catch(error=>{
        dispatch(requestLoading(false))
        toast.error(error.response.data.error)
        console.log(error)
    })
}
