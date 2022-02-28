import React from 'react';
import Box from './Box/index';
import { Col } from './Col';
import { Row } from './Row';
import Card from './Card';
import BigCard from './BigCard';

const mockedArticles = [
  {
    category: 'Desaprobación',
    title: "La Federación de Judo suspende el estatus honorario de Vladimir Putin por la guerra en Ucrania",
    author: "N/N",
    image:'https://th.bing.com/th/id/OIP.55riiXySOQvU1zD9_bPRpQHaE8?pid=ImgDet&rs=1'  },
  {
    category: 'Carrera del Oscar',
    title: " SAG Awards 2022: todo lo que tenés que saber sobre la ceremonia",
    author: "Milagros Amondaray",
    image: 'https://los40es00.epimg.net/los40/imagenes/2022/02/23/cinetv/1645610532_106063_1645611053_gigante_normal.jpg'
  },
  {
    category: 'Alerta meteorológica',
    title: "Advierten por tormentas fuertes en la ciudad y la provincia de Buenos Aires",
    author: "N/N",
    image: 'https://www.bbva.com/wp-content/uploads/2021/07/tormentas_HUB_APERTURA-1024x629.jpg'
  },
  {
    category: 'Dinosaurios',
    title: "Hallan por primera vez en Salta restos de un dinosaurio carnívoro",
    author: "N/N",
    image: 'https://i.kinja-img.com/gawker-media/image/upload/s--sX7gYioh--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1975gz0vetbmkjpg.jpg'
  },
  {
    category: 'Rosario',
    title: "un colegió pidió cuadernos rosas para las niñas y celestes para los niños",
    author: "N/N",
    image: 'https://th.bing.com/th/id/R.8228067446af52c1210c5e257f04fb45?rik=rli8yN65GyDQmA&riu=http%3a%2f%2fwww.marquillas.com.co%2fwp-content%2fthemes%2fmarquillas%2fassets%2fgraphics%2fagendas-libretas-y-cuadernos%2f01.jpg&ehk=h7W59c4cGB90kHmz9g3feHxBoykV3XPdIwv5dfg26x4%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    category: 'Avance científico',
    title: "La espectacular imagen de la mayor erupción solar jamás observada",
    author: "N/N",
    image: 'https://th.bing.com/th/id/R.e9bda581b294d755e33ce43ed2524208?rik=F8i%2bjvXlY0ndSg&pid=ImgRaw&r=0'
  },
]


function Home() {

 const articles = mockedArticles

  return(
    <div>
      <Box title={"ACTUALIDAD"} />
       <div class= "wrapper">
      <Row>
        { articles.map(article => (
          <Col>
            <Card
              category={article.category}
              title={article.title}
              author={article.author}
              image={article.image}
            />
          </Col>)
           )}
           </Row>
            <BigCard
            title={"Anuncios"}
            image={"https://media.informabtl.com/wp-content/uploads/2014/12/Google-vintage-add.jpg"}
            />
      </div>
      <hr/>
   </div>
  );
}


export default Home;