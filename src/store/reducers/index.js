import { combineReducers } from 'redux';
import vehicleReducer from './vehicleReducer'; // Create this file

const rootReducer = combineReducers({
  vehicle: vehicleReducer,
});

export default rootReducer;
