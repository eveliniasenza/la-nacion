import React from 'react';
import '../../css/styles.css'

const BigCard = ({
  image,
}) => {
  return(
      <> 
        <div
          class= "image-xl"
          style={{backgroundImage: `url(${image})`}}
        />
      
    </>
  )
}


export default BigCard;