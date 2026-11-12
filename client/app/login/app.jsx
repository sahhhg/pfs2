import { ApiClient } from "@/utils/apiClient"
import { Router } from "express"
import { useRef } from "react"

export default function login(){
    let email = useRef('')
    let senha = useRef('')

    let router = Router()

    async function logar() {
        if(email.current.value && senha.current.value){
            let obj = {
                email: email.current.value,
                senha: senha.current.value
            }
            let corpo = await ApiClient.post.('/login', obj)
            if(corpo){
                router.replace('/administrador')
            }

        }
        else toast.error("Preencha e-mail e senha")
    }

    return(
        <div>
            <div className="card">
                <h1>Login</h1>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" ref={email}></input>
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control"></input>
                </div>
                <div className="form-group">
                    <button onClick={logar} className="btn btn-primary" ref={senha}>Entrar</button>
                </div>
            </div>
        </div>
    )
}