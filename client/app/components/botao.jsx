


export default function Botao({texto, funcao, tipo}) {


    return (
        <button style={{color: tipo == "erro" ? "red" : "green", backgroundColor: "white"}}  onClick={funcao} >{texto}</button>
    )
}