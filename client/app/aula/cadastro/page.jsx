'use client'
import FormCurso from "@/app/components/formCurso";
import CursoContext from "@/app/context/cursosContext";
import Link from "next/link";
import { useContext, useState } from "react";


export default function PaginaCadastro() {

    const{cursos, setCursos} = useContext(CursoContext);
    const [mensagem, setMensagem] = useState(false);
    
    function cadastrar(nome, instrutor, duracao) {
        //ler os campos do formulário e adicionar o objeto ao array cursos
        let curso = {
            id: Date.now(),
            nome: nome,
            instrutor: instrutor,
            duracao: duracao
        };

        //adiciona no array cursos
        setCursos([...cursos, curso]);
    }

    return (
        <div>
            <FormCurso fnCadastrar={cadastrar}></FormCurso>
            <br></br>
            {
                mensagem ?
                <div>Usuário cadastrado com sucesso!</div>
                :
                <></>
            }
            <hr></hr>
            <Link href="/aula">Ver cursos cadastrados</Link>
        </div>
    )
}