/**
 * Created by Iryna_Petrenko1 on 8/25/2017.
 */
var React = require("react");
var ReactDOM = require("react-dom");

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <div className="book">
                <h1>{this.title}</h1>
                <button type="button">Add</button>
            </div>
        )
    }
}


class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.books = props.books;
    }

    render() {
        return (
            <div className="search-res">

                {
                    this.books.map((book)=> {
                        return (
                            <Book
                                key={book.id}
                                title={book.volumeInfo.title}
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
            books: []
        }

    }

    handleTextChange(event) {
        this.state.text = event.target.value;
    }

    getDataBook(e) {
        e.preventDefault();
        let that=this;
        this.setState({
            books:[]
        });
        this.state.books = [];
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.text)
            .then((response) => response.json())
            .then((res)=> {
                that.setState({
                    books:res
                });
                // this.state.books = res;
                ReactDOM.render(<SearchResult books={this.state.books.items}/>, document.querySelector("#search-res-container"));
            })
            .catch((er)=> {
                console.log(er);
            });
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
                    <button className="search-button" type="button" onClick={this.getDataBook.bind(this)}>Search</button>
                </div>
                <h1>Search Result:</h1>
                <div id="search-res-container"></div>
                {/*<SearchResult/>*/}
                {/*<MyList/>*/}
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);

