
export function selectForm(form){
  console.log('A form has been selected', form.option);
  // selectForm is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return{
    type: 'FORM_SELECTED',
    payload: form
  };

}

// export function continueForm(form){
//   return{
//     type:'CONTINUE_FORM',
//     payload:form
//   };
// }

// export function previousForm(form){
//   return{
//     type:'PREVIOUS_FORM',
//     payload:form
//   };
// }
