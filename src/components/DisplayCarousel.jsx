import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
class DisplayCarousel extends Component {
  render() {
    return (
      <div
        className="div-Carousel"
        style={{
          alignItems: "center",
          marginLeft: "30%",
          marginBottom: "20px",
        }}
      >
        <Carousel style={{ width: "50%", height: "50%" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rb.gy/hdnnwa"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{this.props.booksData[0].title}</h1>
              <p>{this.props.booksData[0].description}</p>
              <b>{this.props.booksData[0].status}</b>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rb.gy/8vgaqk"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{this.props.booksData[1].title}</h1>
              <p>{this.props.booksData[1].description}</p>
              <b>{this.props.booksData[1].status}</b>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rb.gy/u0jisr"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{this.props.booksData[2].title}</h1>
              <p>{this.props.booksData[2].description}</p>
              <b>{this.props.booksData[2].status}</b>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default DisplayCarousel;
