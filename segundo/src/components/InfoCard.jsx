import { useParams, useNavigate } from "react-router-dom"

const InfoCard = () => {
    const navigate = useNavigate()
    const {id} = useParams()
  
  console.log("O id:", id)

  const VoltarHome = () =>{
    navigate("/sobre")

  }
  return (
    <div style={{display:"flex", flexDirection: "column"}}>
        InfoCard do cartão{id}
        <button onClick={VoltarHome}>Voltar</button>
    </div>
  )
}

export default InfoCard
