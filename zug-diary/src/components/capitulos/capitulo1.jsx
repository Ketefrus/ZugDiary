import Root from "./../root";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./../../styles/kapitulo1.scss";

export default function capitulo1() {
  const element = (
    <>
      {" "}
      <p>
        Mini y Zug llegar a la tarde a pozada. Mini dezir ke karta podría zer útil.
      </p>
      <p>Komo no zaber muy bien ke hazer con mi karta Zug pegar akí.</p>
      <div className="center mb-2">
        <Image fluid="true" className="carta" width="400" src="/carta.png" />
      </div>
      <p>
        Nada maz entrar una mujer darnoz la bienvenida. Zug no fiar de ziudadez
        humanaz, pero parezer ke no kerer hazer daño. De todaz maneraz, Zug
        poder arrankar kabeza en kazo de zer nezezario.
      </p>
      <p>
        Mini eztar muy emozionada kon pozada. Zug imaginar ke pazar nochez
        durmiendo en kueva y aplaztando bandidoz no ez tan divertido para niña
        humana (¡Pero para Zug zí!)
        <br /> Mujer zentarnoz en meza pekeña con zer pekeño ke hablaba raro y
        tiefling ke no ze kallaba. Zug kanzarze rápido de tiefling pero Mini
        parezer kontenta con él.
      </p>
      <p>
        Poko dezpuéz venir máz gente. Elfa de kolor extraño, elfa de orejaz
        chikitaz y firbolg kon olor noztálgiko. <br />
        Zug agobiarze en zitioz pekeñoz zi no zer batalla. Elfa de orejaz
        chikitaz dezir de pelear kontra bandidoz a kambio de oro, azí ke Zug ir
        a por bandidoz, pero elfa no dejar ir. Zug tiene ke ezperar a hermano de
        tiefling molezto, eztar enzerrado. Zug también eztar enzerrado una vez.
        ¡Ke rekuerdoz!
      </p>
      <p>
        A Zug koztar entender blah blah de gente ezktraña. Zug no entender por
        ké zolo hablar de aparearze
      </p>
      <p>
        Juzto kuando Zug por fin poder dormir, humanoz enlatadoz poner dibujo de
        Mini en tablón. Zug imaginar ke zer porke Mini zer fuerte pero todo el
        mundo ponerze nerviozo al ver dibujo. Zug empezar a enfadarze porke no
        dejar en paz a Mini. Zug penzar en partir por mitad a Tiefling y gnomo.
        <br /> Firbold zer trankilo y poko molezto y kreo ke elfa oler ezporaz
        orkaz o no hablar komún muy bien.
      </p>
    </>
  );
  const content = (
    <>
      <Card className="m-4 wood wood__main" style={{ width: "75em" }}>
        <Card.Body className="text-light">
          <Card.Title> KAPITULO 1 - LA KARTA </Card.Title>
          <Card.Text>{element}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  return (
    <>
      <Root content={content} />
    </>
  );
}
