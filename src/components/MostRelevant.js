import React from "react";
import News from "../components/News";
import BigNews from "../components/BigNews";
import Box from '../components/Box/index';

function MostRelevant() {
  return (
    <div>
   <Box
     title={'LO MAS RELEVANTE'}z
     />
     <div class="content">
          <BigNews
          category={"Famosos"}
          title={"Natalia Oreiro rompió el silencio en medio del conflicto entre Rusia y Ucrania con un contundente mensaje"}
          text={"La cantante, a quien Vladimir Putin le entregó la ciudadanía en octubre de 2021, utilizó sus redes para expresarse, el jueves su nombre fue tendencia en Twitter..."}
          date={"24 de Enero 2022"}/>
          <News
            category={"Salud"}
            title={"Inventan nueva vacuna"}
            author={"Suiz Jerez"}
            image={
              "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/opinion/mezclar-o-no-mezclar-vacunas-esa-es-la-cuestion/9024847-1-esl-MX/Mezclar-o-no-mezclar-vacunas-esa-es-la-cuestion.jpg"
            }
          />
      </div>
      <hr/>
    </div>
  );
}

export default MostRelevant;
