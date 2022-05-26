import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { newQuote, newColor } from './actions';
import './App.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

function QuoteBox(props) {

    const quote = useSelector(state => state.randomQuote.quote);
    const author = useSelector(state => state.randomQuote.author);
    const data = useSelector(state => state.quoteData);
    const color = useSelector(state => state.colorReducer);

    const dispatch = useDispatch();

    const newQuoteFxn = () => {
        const randomInt = Math.floor(Math.random() * data.length);
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        dispatch(newQuote(data[randomInt].quote,data[randomInt].author));
        dispatch(newColor(randomColor))

    };

    return (
        <>
        <div id="quote-box">
            <h1 id="text" style={{color: color, transition: "all 1s ease", WebkitTransition: "all 1s ease"}}>{quote}</h1>
            <h2 id="author" style={{color: color, transition: "all 1s ease", WebkitTransition: "all 1s ease"}}>{author}</h2>
            <div className='flexbox'>
                <div className='boxitem'>
                    <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?hashtags=noahsapp," + author.replace(/\s/g, '') + "&text=" + quote}>
                        <FontAwesomeIcon style={{color: color, transition: "all 1s ease", WebkitTransition: "all 1s ease"}} icon={faTwitter} size={"3x"}/>
                    </a>
                </div>
                <div className='boxitem'>
                    <button 
                        id="new-quote" 
                        style={{backgroundColor: color, transition: "all 1s ease", WebkitTransition: "all 1s ease"}} 
                        onClick={() => newQuoteFxn()}>
                        New Quote
                    </button>
                </div>
            </div>
        </div>
        <h3>by Noah</h3>
        </>
    );
}

export default QuoteBox;