import { formTypes } from "../components/Page/ContactUs"
import axios, { AxiosResponse } from "axios"

type SendGridTypes = {
    sendEmail: (msg: formTypes) => Promise<AxiosResponse<formTypes> | undefined>
}

export const useSend = () : SendGridTypes => {

    const sendEmail = async (msg: formTypes) => {
        try
        {
            const value = localStorage.getItem('myValue')

            if(value) {
                alert("Thanks Again! We'll reach out as soon as possible")
            } else{
                return await axios.post("https://blu-landing.azurewebsites.net/api/HttpSendSendgridEmail?code=bDvKG0xdME-0IM91LjIm3ATjYHijEH0M1GjDBdEjxTisAzFucPbuSw%3D%3D", {data: msg})
            }
        } catch (error){
            console.log(error)
            alert("There's an error on our side")
        }
    }
 
    return{
        sendEmail,
    }
}

