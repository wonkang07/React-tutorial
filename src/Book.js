import React from 'react'

const Book = ({img, title, price, author, desc}) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)       
    };
  return (
     <article className="book"
        // onClick={()=> console.log("You selected: ",title)}
        onMouseEnter={()=> console.log(title)} > 
        <img width="220" height="300"  margin-left="20" src= {img} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <h1>{price}</h1>
        <h3>{desc} </h3>
       <button type="button" onClick={()=>clickHandler(title)} >  
          Reference Example
        </button>
       
      
    </article>
  )
};


export default Book
