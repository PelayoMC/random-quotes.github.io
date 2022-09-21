function Quotes() {
    const createTweet = () => {};

    return (
        <div id="quote-box">
            <div id="text">Text</div>
            <div id="author">Author</div>
            <button id="new-quote">New quote</button>
            <a href="/#" onClick={createTweet} id="tweet-quote">
                <i className="bi bi-twitter"></i>
            </a>
        </div>
    );
}

export default Quotes;
