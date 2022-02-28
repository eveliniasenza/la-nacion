import React from 'react';
import '../../css/styles.css'

const Advertising = ({
  category,
  title,
  image,
  author
}) => {
  return(
     <div class= "adv red">
        {image && (
             <div
          class= "image"
          style={{backgroundImage: `url(${image})`}}
        /> 
        )}
        <div class="space">
        <p>
          <span>{ category }</span>.&nbsp;
          {title}
        </p>
        { author && (
          <p className={`font-secondary`}>Por {author}</p>
        )}
        </div>
        </div>
  )
}


export default Advertising;