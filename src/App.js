import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponents';
import { STAFFS } from './shared/staffs';
import './App.css';
import dateFormat from 'dateformat';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
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
       <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}
export default App;
