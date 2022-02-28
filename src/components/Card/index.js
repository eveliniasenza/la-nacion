import React from 'react';
import '../../css/styles.css'

const Card = ({
  category,
  title,
  image,
  author,
  text
}) => {
  return(
     <div class= "card">
      <div class= "card-container">
        {image && (
             <div
          class= "image"
          style={{backgroundImage: `url(${image})`}}
        /> 
        )}
        <h3 className={`font-primary-bold`}>
          <span class= "category">{ category }</span>.&nbsp;
          {title}
        </h3>
          {text}
        { author && (
          <p className={`font-secondary`}>Por {author}</p>
        )}
      </div>
    </div> 
  )
}


export default Card;