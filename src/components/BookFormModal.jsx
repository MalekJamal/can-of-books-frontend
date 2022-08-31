import React, { Component } from "react";
import AddBookModal from "./AddBookModal";
import UpdateBook from "./UpdateBook";

class BookFormModal extends Component {
    
  constructor(props){
    super(props);
    this.state={
        show:false,
    }
}
handleShow = ()=>{
    this.setState({
      show:true
    })
  }
  handleClose = ()=>{
    this.setState({
      show:false
    })
  }
  render() {
    return (
      <div style={{  margin: "auto",width: "50%", 
      display:"block", justifyContent:"center" }}>
          <AddBookModal handleClose={this.handleClose} handleShow={this.handleShow}
          show={this.state.show}/>

          <UpdateBook handleClose={this.handleClose} handleShow={this.handleShow}
          show={this.state.show}/>
      </div>
    );
  }
}

export default BookFormModal;
