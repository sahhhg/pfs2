'use client'
import FormImovel from "@/app/components/formImovel";
import { ApiClient } from "@/utils/apiClient";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function alterarImovel(){
    const params = useParams()
    const {id} = params;
    const [imovel,setImovel] = useState(null)
    const [carregando, setCarregando,] = useState(true)

    async function buscarImovel(id) {
        const corpo = await ApiClient.get('/imovel/' + id)
        if(corpo){
            setImovel(corpo)
        }
        else{
            toast.error("Imóvel não encontrado")
        }
    }

    useEffect(() => {
        buscarImovel(id)
    },[])

    return(
        <div>
            <h1>Alterar Imóvel ({id})</h1>
            {<div>
                <Suspense fallback={<p>Carregando...</p>}></Suspense>
                <FormImovel imovel={imovel}>
                </FormImovel>
            </div>
            }
        </div>
    )
}