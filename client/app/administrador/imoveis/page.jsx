'use client'
import { ApiClient } from "@/utils/apiClient";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeImoveis() {

    const [imoveis, setImoveis] = useState([]);
    async function carregarImoveis() {

        //consome o endpoint no backend
        let corpo = await ApiClient.get("/imovel");
        if(corpo) {                   
            console.log(corpo);
            setImoveis(corpo); //força a renderização
        }

    }

    async function excluir(id) {
        let resposta = await ApiClient.delete('/imovel/' + id)
        if(resposta){
            toast.sucess('Imóvel excluído do sucesso')
            carregarImoveis()
        }
    }

    useEffect(() => {
        carregarImoveis();
    }, [])

    return (

        <div>
            <h1>
                Imoveis
            </h1>
            <Link href="/administrador/imoveis/cadastrar" className="btn btn-primary"><i className="fas fa-plus"></i> Cadastrar</Link>
            <br></br>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Bairro</th>
                            <th>CEP</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            imoveis.map(function(value, index) {
                                return <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td>{value.descricao}</td>
                                            <td>{value.bairro}</td>
                                            <td>{value.cep}</td>
                                            <td>{value.valor}</td>
                                            <td>
                                                <div>
                                                    <Link className="btn btn-primary" href={'/administrador/imoveis/alterar/' + value.id}>
                                                        <i className="fas fa-pen"></i>
                                                    </Link>
                                                    {/* callback */}
                                                    <button onClick={() => excluir(value.id)} className="btn btn-danger">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}