import React, { Component } from 'react';
import FormOptionList from '../containers/form-option-list';
import FormDetail from '../containers/form-detail';

export default class App extends Component{
  render(){
    return(
        <div>
          <FormOptionList />
          <FormDetail />
        </div>
      );
  }
}