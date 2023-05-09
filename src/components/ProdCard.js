import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProdCard({por}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={por.img} />
      <Card.Body>
        <Card.Title>{por.FullName} </Card.Title>
        <Card.Text>
         {por.prix}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProdCard;