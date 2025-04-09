import Table from "react-bootstrap/Table";

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <Table striped bordered hover variant="dark">
      <thead>
      <tr>
      <th>Id</th>
      <th>Nome</th>
      <th>Email</th>
      <th>Senha</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>sdkfjs@sradfg.com</td>
          <td>a34eaqr!@W</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>sdkfjs@sradfg.com</td>
          <td>a34eaqr!@W</td>
        </tr>
      </tbody>      
      <tbody>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>sdkfjs@sradfg.com</td>
          <td>a34eaqr!@W</td>
        </tr>
      </tbody>
      </Table>
    </div>
  );
};

export default Sobre;
