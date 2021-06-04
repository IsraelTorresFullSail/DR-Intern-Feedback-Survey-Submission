import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Checkbox from '../checkbox/checkbox.component';

import './form-step2.styles.scss';

export class FormStep2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleCheckboxChange } = this.props;
    return (
      <div className="layer2">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Intern Feedback Survey</h1>
            <h2>Thanks for all of your hard work!</h2>
            <div className="box">
              <p className="p">
                Teams Worked on During Internship (Select all that apply)
              </p>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Account Management"
                  value={values.teams_worked['Account Management']}
                  onChange={handleCheckboxChange}
                />
                <p>Account Management</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="SEO"
                  value={values.teams_worked['SEO']}
                  onChange={handleCheckboxChange}
                />
                <p>SEO</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="LiveChat"
                  value={values.teams_worked['LiveChat']}
                  onChange={handleCheckboxChange}
                />
                <p>LiveChat</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Social Media"
                  value={values.teams_worked['Social Media']}
                  onChange={handleCheckboxChange}
                />
                <p>Social Media</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Digital Advertising"
                  value={values.teams_worked['Digital Advertising']}
                  onChange={handleCheckboxChange}
                />
                <p>Digital Advertising</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Web Development"
                  value={values.teams_worked['Web Development']}
                  onChange={handleCheckboxChange}
                />
                <p>Web Development</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Creative"
                  value={values.teams_worked['Creative']}
                  onChange={handleCheckboxChange}
                />
                <p>Creative</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Content"
                  value={values.teams_worked['Content']}
                  onChange={handleCheckboxChange}
                />
                <p>Content</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Multimedia"
                  value={values.teams_worked['Multimedia']}
                  onChange={handleCheckboxChange}
                />
                <p>Multimedia</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Sales"
                  value={values.teams_worked['Sales']}
                  onChange={handleCheckboxChange}
                />
                <p>Sales</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Admin"
                  value={values.teams_worked['Admin']}
                  onChange={handleCheckboxChange}
                />
                <p>Admin</p>
              </div>
            </div>
            <div className="buttons-container">
              <CustomButton onClick={this.back}>Back</CustomButton>
              <CustomButton onClick={this.continue}>Next</CustomButton>
            </div>
            <div className="dots-wrapper">
              <div className="dot"></div>
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep2;
