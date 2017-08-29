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

    onBookAdd() {
        this.props.handleBookAdd(this.props.id);

    }
    onBookDelete(){
        this.props.handleBookDelete(this.props.id)
    }

    render() {
        return (
            <div className="book">
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
                <div className="book-container">
                    <div className="book-img">
                        <img   src={this.props.smallThumbnail}></img>
                    </div>
                    <div className="book-text">
                        <p>{this.props.description}</p>
                        <p>{this.props.publishedDate}</p>
                        <p>{this.props.authors}</p>
                        <button
                            className="book-button"
                            type="button"
                            onClick={this.props.type==="Delete" ? this.onBookDelete.bind(this):this.onBookAdd.bind(this)}>{this.props.type}</button>
                    </div>
                </div>
            </div>
        )
    }
}
class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.myBooks);
        return (
            <div className="my-list">
                {
                    this.props.myBooks.map((book)=> {
                        return (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                                description={book.volumeInfo.description}
                                publishedDate={book.volumeInfo.publishedDate}
                                authors={book.volumeInfo.authors}
                                handleBookDelete={this.props.onBookDelete}
                                type="Delete"
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
                                id={book.id}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                                description={book.volumeInfo.description}
                                publishedDate={book.volumeInfo.publishedDate}
                                authors={book.volumeInfo.authors}
                                handleBookAdd={this.props.onBookAdd}
                                type="Add"
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
        };
        this.handleBookAdd=this.handleBookAdd.bind(this);
        this.handleBookDelete=this.handleBookDelete.bind(this);
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

    handleBookAdd(id) {

        let res = this.state.books.filter((el)=> el.id===id );
        console.log(res);
        let arr=this.state.myBooks;
        arr.push(res[0]);
        this.setState(
            {
                myBooks: arr
            }
        );
    }
    handleBookDelete(id){
        let res = this.state.myBooks.filter((el)=> el.id!==id );
        console.log(res);
        this.setState(
            {
                myBooks: res
            }
        );
        console.log("delete book" + id);

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
                    <button
                        className="search-button"
                        type="button"
                        onClick={this.getDataBook.bind(this)}>Search
                    </button>
                </div>
                <div className="flex-container">
                    <div className="flex-item">
                        <h1>Search Result:</h1>
                        {
                            this.state.books.length ? <SearchResult books={this.state.books} onBookAdd={this.handleBookAdd}/> : null
                        }

                    </div>
                    <div className="flex-item">
                        <h1>My List:</h1>

                        {
                            this.state.myBooks.length ? <MyList myBooks={this.state.myBooks} onBookDelete={this.handleBookDelete}/> : null
                        }
                    </div>
                </div>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);


