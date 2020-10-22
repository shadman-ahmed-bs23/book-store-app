import React from 'react'; 

import "../App.css"

//Importing Firebase
import firebase from 'firebase'
import fireConfig from '../firebaseConfig/config';

//Importing SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class BookCreate extends React.Component {

  addBook = (e) => {
    e.preventDefault(); 

    //Getting values from the input form
    const title = this.title.value; 
    const message = this.message.value; 
    const imageFile = this.imageFile.files[0];
    const category = this.category.value;  

    var d = new Date(); 
    var id = Date.parse(d).toString();
    console.log(id); 

    console.log(category);
    if(title === '' || message === '') {
      alert("Form can't be empty"); 
      window.location.reload();
    }

    
    
    //Uploading to Firestore
    let firestore = fireConfig.firestore(); 
    const ref = firebase.storage().ref();
    const MySwal = withReactContent(Swal);
    if (imageFile) {
      var fileName = id; 

      const metadata = {
          contentType: imageFile.type,
      };
      const task = ref.child(fileName).put(imageFile, metadata);
      task.then((snapshot) => snapshot.ref.getDownloadURL()).then((url) => {
        //alert("Image Upload Successful");
        console.log(url); 
        firestore
          .collection("Deals")
          .doc(id)
          .set({
            id: id, 
            title: title, 
            message: message, 
            imageUrl: url, 
            category: category
          })
          .then(() => {
            MySwal.fire({
              icon: "success",
              title: "Data Saved!",
              confirmButtonText: "Okay",
            })
            .then(() => {
              window.location.assign('/');
            });
          })
          .catch((error) => {
            console.log(error); 
          }); 
      });
    } else {
        console.log("Image needs to be selected!");
        window.location.reload(); 
    } 
    //Resetting the form 
    this.title.value = ''; 
    this.message.value = ''; 
    this.imageFile.value = '';

  }
  render () {
    return (
      <div className="add-form container">
        <form onSubmit={this.addBook}>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              ref={input => this.title = input}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: </label>
            <input 
              type="text"
              name="message"
              className="form-control"
              placeholder="Message"
              ref={input => this.message = input} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image: </label>
            <input 
              type="file"
              name="imageFile"
              className="form-control-file"
              placeholder="Image URL"
              ref={input => this.imageFile = input }
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category: </label>
            <select 
              className="custom-select" 
              name="category" 
              ref={input => this.category = input}>

              <option value="regular" selected>Regular</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input 
              type="date"
              name="date"
              className="form-control"
              ref={input => this.date = input}
            />
          </div>
          <button type="submit" className="btn btn-info">Add Book</button>
        </form>
      </div>
    ); 
  }
}; 

export default BookCreate;