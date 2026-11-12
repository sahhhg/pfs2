'use client'
import { useRef } from "react";
import Botao from "../components/botao"



export default function FormCurso({ fnCadastrar }) {

    let nome = useRef("");
    let instrutor = useRef("");
    let duracao = useRef(0);

    function cadastrar() {
        fnCadastrar(nome.current.value, instrutor.current.value, duracao.current.value);
    }

    return (
        <div>
            <h1>Cadastro de Cursos</h1>
            <div>
                <label>Nome do curso:</label>
                <input ref={nome} type="text"></input>
            </div>
            <div>
                <label>Duração do curso (horas)</label>
                <input ref={duracao} type="number"></input>
            </div>
            <div>
                <label>Instrutor:</label>
                <input ref={instrutor} type="text"></input>
            </div>
      
            
            <Botao texto={"Cadastrar"} funcao={cadastrar} tipo={"normal"}></Botao>
        </div>
    )
}