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

const books = [
{
  id: 1,
  img:"https://images-na.ssl-images-amazon.com/images/I/414T20kOc3S._AC_SX368_.jpg",
  author:"Michael Connelly",
  title:"The Dark Hours",
  price:"$19.99",
  desc: "This book is fabulous. "
},
{
  id:2,
   author:"Kazuo Ishiguro",
   title:"Klara and the Sun",
   price:"$16.99" , 
   img:"https://images-na.ssl-images-amazon.com/images/I/41Lq0vHRzrS._AC_SX368_.jpg"
},  
{
  id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/419utDzUzkS._AC_SX368_.jpg",
  author:"Maggie Shipstead",
  title:"Great Circle",
  price:"$14.99"  
 },
 {
   id:4,
  author:"Walter Isaacson",
  title:"CODE Breaker",
  price:"$14.99",
  img:"https://images-na.ssl-images-amazon.com/images/I/41sdqD62cSL._AC_SX368_.jpg"
 },
 {
   id:5,
   author:"Chris Whitaker",
   title:"We Begin at the End",
   price:"$14.99",
   img:"https://images-na.ssl-images-amazon.com/images/I/51zVlazs-SL._AC_SX368_.jpg" 
 }
]

function Booklist() {
  return (
    <section className ="booklist"> 
       {books.map((book) => {
         //console.log(book);
           return <Book key={book.id} {...book}> </Book>
       })}
    
     </section>
  );
}
       

const Book = ({img, title, price, author, desc}) => {
 // const { img, author, title, price} = props;
  return (
     <article className="book"> 
        <img width="220" height="300"  margin-left="20" src= {img} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <h1>{price}</h1>
        <h3>{desc} </h3>
    </article>
  )
};
// commenting:    {/* <p> {let x=6} <p> */}
// Name "children" is special reserved word.

ReactDom.render(<Booklist/>, document.getElementById('root'))

// Note: in-line CSS overrides .css file