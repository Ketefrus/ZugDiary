import Card from 'react-bootstrap/Card'
import Root from './root'

export default function Background() {
  const element = 
    <><p>Zug no adora a Gruumsh. Pero Zug no deja de ezkuchar un zumbido detráz de la oreja. </p><p>Karzel, Zug tiene 15 veranoz.</p><p>De la époka de mama Zak y papa Zuk, Zug rekordar poko.
    Mama ziempre dezia ke defendiera a nueztra tribu. Ez importante demoztrar a loz humanoz ke nozotroz zí zaber kuidar a la familia.
    Papa era konozido guerrero y pronto me llevó a la batalla. Papa murió a manoz de humanoz. </p><p>A zug loz humanoz bárbaroz lo kogieron. Zintieron láztima por Zug chikito. Pero Zug zaber kuidarze zolo.</p><p>Humanoz matarze entre humanoz por tonteriaz, no komo klanez orkoz ke tener grandiozaz batallaz. Bárbaroz también morir. </p><p>Zug zer enkarzelado con niña humana. Noz hacen kozaz mágikaz que Zug no llega a entender, pero Zug ver kozaz ke no zer de ezte mundo.</p><p>Ahora Zug grande, y Mini zer chikita. Zug debe  demoztrar que Orkoz zaber kuidar mejor de gente chikita ke humanoz.</p><p>Papa de Mini venir a por Mini. Rezcatarme a mi también. Pero Mini dejarme zolo.
    Zug defender a Mini. Pero Mini preferir irze con papa Mini.</p><p>Zug ahora zolo. Echar de menoz a Mini. Zug no zaber volver a zu klan. </p><p>...</p><p>Taberna humana. Zug tiene 30 veranoz kreo.</p><p>Zug nezezitar volver a ezkribir! Mini volver! Mini alegrarze de enkontrarze a Zug. Mini decir a Zug ke eztar perdida como Zug. Zug hará lo pozible por defender a Mini. Loz orkoz ziempre defienden a zu tribu.</p></>
  const content = 
  <>
    <Card className='m-4 wood wood__main' style={{width: '40em'}}>
      <Card.Img orientation="top" className="image-orc" src="/Orc-5e.webp"/>
      <Card.Body className='text-light'>
        <Card.Title>Diario de Zug</Card.Title>
        <Card.Text>
          { element }
        </Card.Text>
      </Card.Body>
    </Card>
  </>

  return (
    <>
      <Root content={content} />
    </>
  );
}