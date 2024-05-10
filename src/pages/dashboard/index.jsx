import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { getUserName } from "../../http"

export default function Dashboard(){

    const [isLogin, setIsLogin] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            console.log(token)
            setIsLogin(getUserName(token))
        }else{
            window.location.href = "/login"
        }
    }, [])

    const LogOut = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    return(
    <>
    <div className="container">
    <h1>Test Login</h1>
    <h3>Sample data from login user</h3>
        <p>{isLogin.username}</p>
        <p>{isLogin.role}</p>
        <p>{isLogin.email}</p>
        <p>{isLogin.id}</p>
    </div>
    <button onClick={LogOut}>Log Out</button>
    </>
    )
}