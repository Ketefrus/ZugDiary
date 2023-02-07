import Root from './root';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./../styles/amigos.scss";

export default function capitulo1() {
  const zugStory = <>Zoy yo!</>;
  const iridStory = <>Huele komo pozilga</>;
  const miniStory = <>Tengo ke kuidar a Mini!</>;
  const azulStory = <>No zabe kallar</>;

  const bios = [
    {
      name: 'Zug',
      story: zugStory,
      race: 'Orc'
    },
    {
      name: 'Mini',
      story: miniStory,
      race: 'Dhampir'
    },
    {
      name: 'Irid',
      story: iridStory,
      race: 'Firbolg'
    },
    {
      name: 'Azulis',
      story: azulStory,
      race: 'TieflingBard'
    }
  ]
  const characters = bios.map((bio) => 
    <>
    <Col>
      <Card className="m-4 wood cardCharacter" style={{ width: "auto" }}>
        <Card.Img className="portrait" orientation="top" src={`${bio.race}-5e.webp`}/>
        <Card.Body className="text-light">
          <Card.Title> {bio.name} </Card.Title>
          <Card.Text>{bio.story}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
  const content = 
  <>
    <Row>
      {characters}
    </Row>
  </>
  return (
    <>
      <Root content={content} />
    </>
  );
}
