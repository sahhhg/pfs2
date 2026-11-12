'use client'
import Link from "next/link";
import Botao from "./botao";
import { useEffect, useRef } from "react";
import { ApiClient } from "@/utils/apiClient";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function FormImovel({imovel}) {

    let descricao = useRef("");
    let bairro = useRef("");
    let endereco = useRef("");
    let cidade = useRef("");
    let cep = useRef("");
    let valor = useRef(0);
    let disponivel = useRef();
    const [setAlt, alt] = useState(false)

    const router = useRouter();

    async function cadastrar() {
        let obj = {
            descricao: descricao.current.value,
            cep: cep.current.value,
            bairro: bairro.current.value,
            endereco: endereco.current.value,
            cidade: cidade.current.value,
            valor: valor.current.value,
            disponivel: disponivel.current.checked ? "S" : "N"
        }
        //validação simples
        if(obj.descricao && obj.cep && obj.bairro && obj.cidade && obj.endereco && obj.valor > 0) {
            //monta o fetch com método POST
            let resposta = await ApiClient.post("/imovel", obj);
            if(resposta) {
                toast.success("Imóvel cadastrado com sucesso!");
                //redireciona para a listagem
                //const router = useRouter();
                router.replace("/administrador/imoveis");
            }

        }
        else {
            alert("Preencha corretamente os campos do formulário!");
        }
    }

     async function alterar() {
        let obj = {
            id: imovel.id,
            descricao: descricao.current.value,
            cep: cep.current.value,
            bairro: bairro.current.value,
            endereco: endereco.current.value,
            cidade: cidade.current.value,
            valor: valor.current.value,
            disponivel: disponivel.current.checked ? "S" : "N"
        }
        //validação simples
        if(obj.descricao && obj.cep && obj.bairro && obj.cidade && obj.endereco && obj.valor > 0) {
            //monta o fetch com método POST
            let resposta = await ApiClient.put("/imovel", obj);
            if(resposta) {
                toast.success("Imóvel alterado com sucesso!");
                //redireciona para a listagem
                //const router = useRouter();
                router.replace("/administrador/imoveis");
            }

        }
        else {
            alert("Preencha corretamente os campos do formulário!");
        }
    }   

    useEffect(() => {
        if(imovel){
            setAlt(true)

            descricao.current.value = imovel.descricao || ''
            cep.current.value = imovel.cep || ''
            bairro.current.value = imovel.bairro || ''
            endereco.current.value = imovel.endereco || ''
            cidade.current.value = imovel.cidade || ''
            valor.current.value = imovel.valor || ''
            disponivel.current.checked = imovel.disponivel || 'S'
        }
    })

    return (
        <div>
            <div className="form-group">
                <label>Descricao:</label>
                <input ref={descricao} className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label>CEP:</label>
                <input ref={cep} className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label>Endereço:</label>
                <input ref={endereco} className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label>Bairro:</label>
                <input ref={bairro} className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label>Cidade:</label>
                <input ref={cidade} className="form-control" type="text"></input>
            </div>

            <div className="form-group">
                <label>Valor:</label>
                <input ref={valor} className="form-control" type="number"></input>
            </div>

            <div className="form-group">
                <label><input ref={disponivel} type="checkbox"></input>  Disponível</label>
            </div>

            <Botao texto="Gravar" funcao={alteracao ? alterar : cadastrar}></Botao>
            <Link href="/administrador/imoveis" className="btn btn-default">Voltar</Link>
        </div>
    )
}