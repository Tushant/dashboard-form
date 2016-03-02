import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectForm } from '../actions/index';
import { bindActionCreators } from 'redux';

class FormOptionList extends Component{
  renderList(){
    return this.props.formOptions.map((formOption) => {
      
      return(
          <li 
            key={formOption.id}
             onClick = { () => this.props.selectForm(formOption) } 
            className="list-group-item">
            {formOption.option}
          </li>
        );
    });
  }
  render(){
    // console.log(this.props.asdf)-->123
    return(
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      );
  }
}

function mapStateToProps(state){
   // whatever is returned will show up as props 
   // inside of FormOptionList
   return{
    // asdf:'123'
    // this.props.formOptions will have value 'option' from state that is in reducer as formOptions key with value 'option'
    formOptions:state.formOptions 
   };
}

function mapDispatchToProps(dispatch){
  // dispatching action named selectForm is passed to all reducers with the same key name which will be used as props
  // in the container for triggering selectForm action 

  return bindActionCreators({ selectForm: selectForm }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(FormOptionList);