import React from 'react';
import './App.css';
import { FaQuoteLeft, FaQuoteRight  } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import {useState, useEffect} from 'react';
function App() {
const [quote, setQuote]=useState('');
const [author, setAuthor]=useState('');
const [data, setData]=useState('');
const [category,setCategory]=useState('love')
const categoryClick = (event) => {
  setCategory(event.target.value);
}


const handleClick = () => {
  fetch('https://api.api-ninjas.com/v1/quotes?category=' + category,
        {headers: {
          'X-Api-Key': '/49MvzZK96l4l3uyoXBPBA==zBegcro3P0xGlGFV' }
        })
  .then(response => response.json())
  .then(data => { setQuote(data[0].quote);
                 setAuthor(data[0].author);
               }
    )
  .then(data =>  {}
    )

}
  return (
    <div className="App">
    <h1>RandomQuote</h1>
    <div className="categories-container">
    <label htmlFor="categories">Choose a category :</label>
       <select name="categories" id="categories" onChange={categoryClick}>

           <option value="love" >love</option>
           <option value="happiness" >happiness</option>
           <option value="success">success</option>
           <option value="life" >life</option>
           <option value="inspirational">inspirational</option>
           <option value="dating" >dating</option>
           <option value="education" >education</option>
           <option value="dreams" >dreams</option>
           <option value="freedom" >freedom</option>
           <option value="failure" >failure</option>
           <option value="god" >god</option>
           <option value="family" >family</option>
       </select>
    </div>
        

    <div className="container">
      <p className="quote"><FaQuoteLeft color ="#00154f" size={45} /><p className="initial-quote">{quote}</p></p>
      <p className="writer"><BsPencilSquare />{author}</p>
      <button onClick={handleClick}>New Quote</button>

    </div>
    </div>
  );
}

export default App;
