import axios from "axios"
import { useState } from "react"
import { login } from "../../http"

export default function LoginPage(){
    const [loginFailed, setLoginFailed] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        const data = {
            email: email,
            password: password
        }

        login(data, (status, res) => {
            if(status){
                localStorage.setItem("token", res)
                window.location.href = "/dashboard"  
            }else{
                setLoginFailed(res.message)
            }
        })
    }


    return(
        <section class="vh-100" style={{ backgroundColor: "" }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                    <div class="card-body p-5">

                        <h3 class="mb-5">Sign in</h3>

                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" htmlFor="typeEmailX-2">Email</label>
                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" htmlFor="typePasswordX-2">Password</label>
                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        {/* <!-- Checkbox --> */}
                        <div class="form-check d-flex justify-content-start mb-4">
                        <input class="form-check-input" type="checkbox" id="form1Example3" />
                        <label class="form-check-label" htmlFor="form1Example3"> Remember password </label>
                        </div>
                        {loginFailed && (<p style={{ color: "red", paddingBottom: 5 }}>*{loginFailed}</p>)}

                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" onClick={handleLogin} >Login</button>

                        <hr class="my-4"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    )
}