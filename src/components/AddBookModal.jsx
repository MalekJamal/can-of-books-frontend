import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from 'sweetalert';

class AddBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookStatus: "",
      bookTitle: "",
      bookDescription: "",
      showAlert:false
    };
  }
    alertBox =(data)=>{
        
        swal("Book Adedd Successfully!",`
        book title: ${data.title}.\n
        book description: ${data.description}.\n
        book status: ${data.status}.
        `, "success");
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    const newBook ={
        "newBook":{
        "title": this.state.bookTitle,
        "description": this.state.bookDescription,
        "status": this.state.bookStatus
    }
       }
    await axios.post(`http://localhost:3001/books`,newBook)
    console.log(newBook)
    this.alertBox(newBook.newBook);
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.props.handleShow}>
          Add Book
        </Button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ margin: "auto", width: "50%" }}>
              <div>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Add New Book</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Book Title"
                      id="bookTitle"
                      required
                      onChange={(e) => {
                        this.setState({ bookTitle: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="description"
                      id="description"
                      onChange={(e) => {
                        this.setState({ bookDescription: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Book status</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Book status"
                      id="status"
                      onChange={(e) => {
                        this.setState({ bookStatus: e.target.value });
                      }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" 
                  onClick={()=>{this.setState({showAlert: true})}}>
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddBookModal;
