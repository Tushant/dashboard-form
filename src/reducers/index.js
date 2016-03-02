import { combineReducers } from 'redux';
import FormOptionReducer from './reducer_form_options';
import ActiveFormReducer from './reducer_active_form';

const rootReducer = combineReducers({
  // key books is added in the reducer with the value BooksReducer from book_reducer.js
  // formOptions is one state(a piece of state which provides some values)
  // state.formOptions can be now used in form-option-list.js for mapping state from reducer to props in container
  formOptions: FormOptionReducer,
  activeForm: ActiveFormReducer
});

export default rootReducer;