import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs.jsx';
import StaffList from './components/StaffListComponents';
import './App.css';
import dateFormat from 'dateformat';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
       
      </div>
    );
  }
}
export default App;
