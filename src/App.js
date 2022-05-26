import './App.scss';
import QuoteBox from './quote-box';
import {useDispatch} from 'react-redux';
import {newData, newQuote, newColor} from "./actions";
import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      const randomInt = Math.floor(Math.random() * request.data.quotes.length)
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      dispatch(newData(request.data.quotes));
      dispatch(newQuote(request.data.quotes[randomInt].quote,request.data.quotes[randomInt].author));
      dispatch(newColor(randomColor))
      return request
    }
    fetchData();
  }, [url]);

  const color = useSelector(state => state.colorReducer);


  return (
    <div className='home' style={{backgroundColor:color, transition: "all 1s ease", WebkitTransition: "all 1s ease"}}>
      <QuoteBox />
    </div>
  );
}

export default App;
