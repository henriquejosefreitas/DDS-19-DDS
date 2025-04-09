import Button from "react-bootstrap/Button";
import MyCard from "../components/MyCard";

const Home = () => {
return(
<div>
<h1>Home</h1>
<Button variant="primary" size="lg">
CADASTRAR
</Button>
<br />
<br />
    <MyCard
    titulo="The Goat"
    img="https://jpimg.com.br/uploads/2024/11/cristiano-ronaldo-676x450.jpg"
    desc="O melhor jogador da história do planeta
    terra"
    />
    <br />
    <MyCard
    titulo="Nintendo Switch"
    img="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_800/ncom/software/switch/70010000004519/f43ebd5cdac98ed79b9e15c399b87e2c0d354757906f90eb3bd02aa01edc01e8"
    desc="Pokémon World"
    />
    </div>
  );
};

export default Home;
