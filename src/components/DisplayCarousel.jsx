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
          {this.props.booksData &&
            this.props.booksData.map((item,idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1850021/pexels-photo-1850021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                    key={idx}
                  />
                  <Carousel.Caption>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <b>{item.status}</b>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </div>
    );
  }
}

export default DisplayCarousel;
