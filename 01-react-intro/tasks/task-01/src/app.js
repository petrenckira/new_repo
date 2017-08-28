/**
 * Created by Iryna_Petrenko1 on 8/25/2017.
 */
var React = require("react");
var ReactDOM = require("react-dom");

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="book">
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
                <img src={this.props.smallThumbnail}></img>
                <p>{this.props.description}</p>
                <p>{this.props.publishedDate}</p>
                <p>{this.props.authors}</p>
                <button onClick={this.addBook.bind(this)} type="button">Add</button>
            </div>
        )
    }
}
class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-list">
                {
                    this.props.myBooks.map((book)=> {
                        return (
                            <Book
                                key={book.id}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                                description={book.volumeInfo.description}
                                publishedDate={book.volumeInfo.publishedDate}
                                authors={book.volumeInfo.authors}
                            />
                        )
                    })
                }
            </div>
        )
    }
}


class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-res">

                {
                    this.props.books.map((book)=> {
                        return (
                            <Book
                                key={book.id}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                                description={book.volumeInfo.description}
                                publishedDate={book.volumeInfo.publishedDate}
                                authors={book.volumeInfo.authors}
                            />
                        )
                    })
                }
            </div>
        )
    }

}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            books: [],
            myBooks: []
        }

    }

    handleTextChange(event) {
        this.state.text = event.target.value;
    }

    getDataBook(e) {
        e.preventDefault();

        fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.text)
            .then((response) => response.json())
            .then((res)=> {
                this.setState({
                    books: res.items
                });
                console.log(res.items);

            })
            .catch((er)=> {
                console.log(er);
            });
    }

    addBook(id){


    }


    render() {
        return (
            <div >
                <div className="search-block">
                    <input
                        type="text"
                        placeholder="Enter your note here..."
                        onChange={this.handleTextChange.bind(this)}
                    />
                    <button className="search-button" type="button" onClick={this.getDataBook.bind(this)}>Search
                    </button>
                </div>
                <h1>Search Result:</h1>
                {
                    this.state.books.length ? <SearchResult books={this.state.books}/> : null
                }
                {
                    this.state.books.length ? <MyList books={this.state.myBooks}/> : null
                }

            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);

