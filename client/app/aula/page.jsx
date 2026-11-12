'use client'

import { useContext, useEffect, useRef, useState } from "react";
import FormCurso from "../components/formCurso";
import Botao from "../components/botao";
import CursoContext from "../context/cursosContext";
import Link from "next/link";

export default function PaginaAula() {

    //regras de funcionamento (funções, variaveis....)
    const {cursos, setCursos} = useContext(CursoContext);

    function excluir(idExclusao) {
        setCursos(cursos.filter(x => x.id != idExclusao));
    }


    useEffect(() => {
    }, [])

    //exibição;
    return (
        <div>
            <h1>Cursos cadastrados</h1>
            <Link href="/aula/cadastro">Cadastrar curso</Link>
            <div>
                {
                    cursos.map((value, index) => {
                        return <div key={index}>
                            {value.nome} - {value.instrutor} - 
                            Duração {value.duracao} horas 
                            <Botao funcao={() => excluir(value.id)} texto={"Excluir"} tipo={"erro"}></Botao>
                        </div>
                    })
                }
            </div>
        </div>
    )
}