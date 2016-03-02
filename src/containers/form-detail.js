import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDetail extends Component{
  renderPersonalInfo(){
    return(
      <div className="personalInfo">
        <div className="col-md-4">
          <label htmlFor='name'>Owner Name</label>
          <input ref="name" type="textbox" className="form-control" id="name" placeholder="Owner name" />
        </div>

        <div className="col-md-4">
          <label htmlFor="email">Email</label>
          <input ref="email" type="email" className="form-control" id="email" placeholder="email" />
        </div>

        <div className="col-md-4">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input ref="phone" type="textbox" className="form-control" id="phoneNumber" placeholder="phone number" />
        </div>

        <div className="buttons">
          <button className="btn btn-primary">Continue</button>
        </div>

      </div>
      );
  }

  renderBasicInfo(){
    return(
       <div>
              <h3>Help Rent seekers find the right fit</h3>
              <p className="subtitle">People searching on Rental Space can filter by listing basics to find a space that matches their needs.</p>
              <hr/>
              <div className='col-md-4 basicForm'>
                  <label htmlFor="price">Number of Rooms</label>
                  <select className = "form-control" name="Rooms" ref="rooms">
                      <option value="1">1 room</option>
                      <option value="2">2 rooms</option>
                      <option value="3">3 rooms</option>
                      <option value="4">4 rooms</option>
                      <option value="5">5 rooms</option>
                      <option value="6">6 rooms</option>
                      <option value="7">7 rooms</option>
                      <option value="8">8 rooms</option>
                      <option value="9">8+ rooms</option>
                  </select>
              </div>
              <div className="col-md-4 basicForm">
                  <label htmlFor="price">Property Type</label>
                  <select className="form-control" name="Property Type" ref="property">
                      <option value="appartment">Appartment</option>
                      <option value="house">House</option>
                      <option value="shop">Shop</option>
                      <option value="bunglow">Bunglow</option>
                      <option value="hostel">Hostel</option>
                  </select>
              </div>
              <div className="col-md-4 basicForm">
                  <label htmlFor="price">Price</label>
                  <input type="textbox" ref="price" className="form-control" id="price" placeholder="Enter Price" required />
              </div>
              <div className="buttons">
                <button className="btn btn-primary">Back</button>
                <button className="btn btn-primary">Continue</button>
              </div>
            </div>
      );
  }

  renderDescription(){
    return(
        <div>
            <h3>Tell Rent Seekers about your space</h3>
            <hr/>
            <div className="col-md-6">
                <label htmlFor="listingName">Listing Name</label>
                <input ref="name" type="textbox" className="form-control" id="listingName" placeholder="Be clear" />
            </div>
            <div className="col-sm-6">
                <label htmlFor="summary">Summary</label>
                <textarea ref="summary" className="form-control" id="summary" rows="3"></textarea>
            </div>
             <div className="buttons">
                <button className="btn btn-primary">Back</button>
                <button className="btn btn-primary">Continue</button>
             </div>
        </div>
      );
  }

  renderLocation(){
    return(
        <div>
            <h3>Help guests find your place</h3>
            <p className="subtitle">will use this information to find a place that’s in the right spot.</p>
            <hr/>
            <div className="col-md-6">
                <label htmlFor="city">City</label>
                <input ref="city" type="textbox" className="form-control" id="city" placeholder="Biratnagar" />
            </div>
            <div className="col-md-6">
                <label htmlFor="placeName">Name of Place</label>
                <input ref="place" type="textbox" className="form-control" id="placeName" placeholder="Ganesh Chowk" />
            </div>
             <div className="buttons">
                <button className="btn btn-primary">Back</button>
                <button className="btn btn-primary">Continue</button>
             </div>
        </div>
      );
  }

  renderAmenities(){
    return(
        <div>Amenities Information form</div>
      );
  }

  renderGallery(){
    return(
        <div>Gallery Information form</div>
      );
  }

  render(){
    if ( !this.props.form){
      return this.renderPersonalInfo();
    }

    const type = this.props.form.option;
    console.log('type is', type);

    if ( type === 'Personal Information'){
      return this.renderPersonalInfo();
    }

    if ( type === 'Basic Information'){
      return this.renderBasicInfo();
    }

    if ( type === 'Description'){
      return this.renderDescription();
    }

    if ( type === 'Location'){
      return this.renderLocation();
    }

    if ( type === 'Amenities'){
      return this.renderAmenities();
    }

    if ( type === 'Gallery'){
      return this.renderGallery();
    }
}
}

function mapStateToProps(state){

  return{
    form: state.activeForm
  };
}

export default connect(mapStateToProps)(FormDetail);
