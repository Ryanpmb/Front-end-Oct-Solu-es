import { LoginInterface } from "@/app/Interfaces/UserInterface";
import { api } from "../api";


const UserLogin = async (userLogin : LoginInterface) =>{
    try {
        const response = await api.post("/UserLogin", userLogin);
        return response.data;

    } catch (error : any) {
        
        console.error(error)
        if(error.status === 404){
            return error
        }

    }
}

export {
    UserLogin
}