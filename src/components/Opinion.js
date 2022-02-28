import React from 'react';
import Advertising from './Advertising';
import Box from '../components/Box'

function Opinion() {
  return (
    <>
    <Box title={"OPINIÓN"}/>
    <main>       
      <section>
        <Advertising
        category={"Espectáculos"}
        title={"La determinante decisión del hijo mayor de Julieta Prandi tras el fallo de la Justicia contra su padre"}
        image={"https://www.minutoneuquen.com/u/fotografias/m/2020/7/19/f1280x720-324571_456246_4939.jpg"}
        author={"juan Jerez"}/>
      </section>
      <section>
      <Advertising
      category={"Maritimo"}
      title={"Después de 10 años, se va el barco que le costó al país US$1200 millones"}
      image={"https://t1.pb.ltmcdn.com/es/posts/7/4/8/que_significa_sonar_con_un_barco_5847_orig.jpg"}
      author={"Ana Ventrano"}/>
      </section>
      <section>
      <Advertising 
      category={"País"}
      title={"Vivir en Vaca Muerta: las caras del nuevo sueño argentino"}
      image={"https://www.argentina.gob.ar/sites/default/files/vaca-muerta-mapa-3.jpg"}
      author={"Alan Braz"}/>
      </section>
   </main>
   <hr/>
   </>
  );
}

export default Opinion;