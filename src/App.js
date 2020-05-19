/*to provide redux-store to react-app, the react-redux library has component called provider*/
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TableContainer from './components/TableContainer'; 
 
function App() {
  return (
  	<Provider store={store}>
    <div className="App">
      <TableContainer />
    </div>
    </Provider>
  );
}

export default App;
