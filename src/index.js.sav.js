import React from 'react'
import ReactDom from 'react-dom'

// CCS
import './index.css'

// JSX rules
//  always return a single element
//  div/ section / article or fragment
//  use camelCase for html attribute
//  callName instead of class
//  close every element
//  formatting

// Nested components and React tools
const book1 = {
  img:"https://images-na.ssl-images-amazon.com/images/I/414T20kOc3S._AC_SX368_.jpg",
  author:"Michael Connelly",
  title:"The Dark Hours",
  price:"$19.99" 
}
const book2 = {
   author:"Kazuo Ishiguro",
   title:"Klara and the Sun",
   price:"$16.99" , 
   img:"https://images-na.ssl-images-amazon.com/images/I/41Lq0vHRzrS._AC_SX368_.jpg"
}




function Booklist() {
  return (
    <section className ="booklist"> 
       <Book 
        imgSrc={book1.img}
        author={book1.author} 
        title={book1.title} 
        price={book1.price} 
        > 
        <p>This is the description of the first book. </p>
        </Book>
       <Book imgSrc={book2.img} author={book2.author} title={book2.title} price={book2.price} />
       <Book author="Maggie Shipstead" title="Great Circle" price="$14.99"  
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/419utDzUzkS._AC_SX368_.jpg" />
        <Book author="Walter Isaacson" title="CODE Breaker" price="$14.99" 
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/41sdqD62cSL._AC_SX368_.jpg"/> 
        <Book author="Chris Whitaker" title="We Begin at the End" price="$14.99" 
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/51zVlazs-SL._AC_SX368_.jpg" /> 
    
    </section>

  )
}
// Setup variables

// const author = "Michael Connelly"
// const title = "The Dark Hours"
// const imgSrc = "https://images-na.ssl-images-amazon.com/images/I/414T20kOc3S._AC_SX368_.jpg"

const Book = (props) => {
  const { imgSrc, author, title, price} = props;
  return (
     <article className="book"> 
        <img width="220" height="300"  margin-left="20" src= {imgSrc} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        {props.children}
        <h1>{price}</h1>
   
    </article>
  )
};
// commenting:    {/* <p> {let x=6} <p> */}
// Name "children" is special reserved word.

ReactDom.render(<Booklist/>, document.getElementById('root'))

// Note: in-line CSS overrides .css file