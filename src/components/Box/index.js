import React from 'react';
import '../../css/styles.css';


const Box = ({title}) => {
  
  return(
    <div>
      { title && (
        <>
          <h2 className={`font-primary`}>
            {title} 
          </h2>
          <hr/>
        </>
      ) }
    </div>
  )
}

export default Box;