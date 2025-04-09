import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      {/* Caixinhas de nome, email e senha */}
      <FloatingLabel
        controlId="floatingInputNome"
        label="Nome"
        className="mb-3"
      >
        <Form.Control size="lg" type="text" placeholder="" />
      </FloatingLabel>

      <FloatingLabel 
      controlId="floatingInputEmail" 
      label="Email"
      className="mb-3"
      >
        <Form.Control size="sm" type="email" placeholder="" />
      </FloatingLabel>

      <FloatingLabel 
      controlId="floatingPassword" 
      label="Senha"
      className="mb-3"
      >
        <Form.Control type="password" placeholder="" />
      </FloatingLabel>

      {/* Caixinha de arquivo */}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Envie uma imagem</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      {/* Caixinha select */}
      <Form.Select size="lg">
      <option>Tipo de Usuario</option>
      <option value="Administrador">Administrador</option>
      <option value="Funcionário">Funcionário</option>
      <option value="Gerente">Gerente</option>
    </Form.Select>
    </div>
  );
};

export default Cadastro;
