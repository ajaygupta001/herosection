import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import pic from "../assets/5.png";

function App() {
  return (
    <div className="container col-xxl-8 px-4 py-5 bg-warning">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={pic} className="d-block  mb-3 mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Building ERP's Globally</h1>
          <p className="lead">Quickly design and customize responsive mobile-first sites</p>

          <div className="container">
      <div className="row justify-content-space">
        <div className="col-md-auto mb-3">
          {/* First DropdownButton */}
          <DropdownButton id="dropdown-basic-button-1" className='btn-primary' title="Learn More">
            <Dropdown.Item href="https://www.youtube.com/">Action</Dropdown.Item>
            <Dropdown.Item href="https://www.youtube.com/">Another action</Dropdown.Item>
            <Dropdown.Item href="https://www.youtube.com/">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col-md-auto">
          {/* Second DropdownButton */}
          <DropdownButton id="dropdown-basic-button-2" className='btn-primary' title="Contact Us">
            <Dropdown.Item href="https://www.youtube.com/">Action</Dropdown.Item>
            <Dropdown.Item href="https://www.youtube.com/">Another action</Dropdown.Item>
            <Dropdown.Item href="https://www.youtube.com/">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default App;
