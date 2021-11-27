import React from 'react'
import ReactDom from 'react-dom'

import {books} from './books'  // Named import requires {}
import Book from './Book'
// CCS
import './index.css'
import {greeting} from './testing/testing'


function Booklist() {
  console.log(greeting)
  return (
    <section className ="booklist"> 
       {books.map((book) => {
           return <Book key={book.id} {...book}> </Book>
       })}
     </section>
  );
}
       


// commenting:    {/* <p> {let x=6} <p> */}
// Name "children" is special reserved word.

ReactDom.render(<Booklist/>, document.getElementById('root'))

// Note: in-line CSS overrides .css file