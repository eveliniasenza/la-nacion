import React from 'react';
import '../../css/styles.css'

const BigNews = ({
  category,
  title,
  date,
  text
}) => {
  return(
     <div class= "news">
      <div>
        <h1 className={`font-primary-bold`}>
          <span class= "category">{ category }</span>.&nbsp;
          {title}
        </h1>
          {text}
        { date && (
          <p className={`font-secondary`}>{date}</p>
        )}
      </div>
    </div> 
  )
}


export default BigNews;