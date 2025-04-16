import { useState, useEffect } from "react";

const url = "http://localhost:5000/funcionarios"

export function getFuncionarios(){
    
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect( () => {
        async function fetchData(){
            try{
                const response = await fetch(url)
                const data = await response.json()
                setFuncionarios(data)
                console.log("Dados recebidos: ", data)
            }
            catch(error){
                console.log("Erro ao buscar os dados:", error)
            }
        }
        fetchData()
    },[])

    return funcionarios;
}


export function addFuncionario(funcionario){
    async function fetchBase(){
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(funcionario)
            })
            const data = await response.json()
            console.log("Usuário adicionado: ", data)
        }
        catch(error){
            console.log("Erro ao cadastrar funcionário:", error)
        }
    }
    fetchBase()
}