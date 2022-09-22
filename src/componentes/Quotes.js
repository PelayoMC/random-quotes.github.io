import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import quotes from "./quotes-json";

const Quotes = () => {
    // hooks
    const [quote, setQuote] = useState({
        quote: "",
        author: "",
    });
    useEffect(() => {
        setQuote(quotes[0]);
    }, []);

    // functions
    const changeQuote = () => {
        let random = Math.floor(Math.random() * 3);
        console.log("cambiamos a la quote " + random);
        setQuote(quotes[random]);
    };
    const createTweet = () => {
        console.log("creamos tweet");
    };

    // render
    return (
        <div id="quote-box">
            <div id="text">{quote.quote}</div>
            <div id="author" className="ms-auto me-5">
                <div>~{quote.author}</div>
            </div>
            <div id="buttons" className="d-flex justify-content-between pt-5">
                <a
                    href="/#"
                    onClick={createTweet}
                    id="tweet-quote"
                    className="me-auto ms-5"
                    data-tip
                    data-for="tweet-quote-toooltip"
                >
                    <i className="bi bi-twitter"></i>{" "}
                </a>
                <ReactTooltip id="tweet-quote-toooltip" place="bottom">
                    Create tweet
                </ReactTooltip>
                <button
                    id="new-quote"
                    className="btn btn-primary btn-sm ms-auto me-5"
                    onClick={changeQuote}
                >
                    New quote
                </button>
            </div>
        </div>
    );
};

export default Quotes;
