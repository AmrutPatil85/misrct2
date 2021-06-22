import logo from './logo.svg';
import './App.css';
import {NavMenu} from './Navigation';
import { Layout } from './Layout';

import { Home } from './Components/Home';
import { Employee } from './Components/Employee';
import { Link, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <Router>
  
    <Layout>
        <Switch>
          <Route exact  path={"/"} component={Home}/>
          {/* <Route path="/fetch-purOrdEntry" component={Employee}/> */}
          
          
        <Route/>
      </Switch>
    </Layout>
      
    </Router>
    // <div>
    //   <Home/>
    //   <Employee/>
    // </div>
  );
}

export default App;
