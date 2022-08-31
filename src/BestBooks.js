import React from "react";
import DisplayCarousel from "./components/DisplayCarousel";
import axios from "axios";
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    const booksResponse = await axios.get(
      `${process.env.REACT_APP_SERVER_BD_URL}`
    );
    this.setState({
      books: booksResponse.data,
    });
  };
  componentDidMount() {
    this.getBooks();
  }
  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <DisplayCarousel booksData={this.state.books} key={1+3}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
