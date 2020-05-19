import { REQUESTED_TABLEDATA, REQUESTED_TABLEDATA_SUCCEEDED, REQUESTED_TABLEDATA_FAILED  } from './tableTypes';
 
const initialState = {
  url: '',
  loading: false,
  error: false,
};
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_TABLEDATA:
      return {
      	...state,//current copy of state,
        fetchedData: '',
        loading: true,
        error: false, 
      };
    case REQUESTED_TABLEDATA_SUCCEEDED:
      return {
      	...state,//current copy of state
        fetchedData: action.fetchedData,
        loading: false,
        error: false,
      };
    case REQUESTED_TABLEDATA_FAILED:
      return {
      	...state,//current copy of state
        fetchedData: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
 

 export default tableReducer//importing in rootReducer(which is collection of all reducer)