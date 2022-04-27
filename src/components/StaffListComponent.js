import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { render } from 'react-dom';



class StaffList  extends Component {
    constructor(props) {
        super(props);
      this.state = {
        staffs: STAFFS
      }
    }

    render() {
        const list = this.state.staffs.map((staff) => {
            return (
              <div key={staff.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={staff.image} alt={staff.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{staff.name}</Media>
                    <p>{staff.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {list}
              </Media>
            </div>
          </div>
        );
    }
}

export default StaffList;