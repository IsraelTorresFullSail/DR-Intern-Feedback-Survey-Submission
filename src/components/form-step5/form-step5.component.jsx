import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';

import './form-step5.styles.scss';

export class FormStep5 extends Component {
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
    const { values, handleChange } = this.props;

    return (
      <div className="layer5">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Intern Feedback Survey</h1>
            <h2>Thanks for all of your hard work!</h2>
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="improve_program"
                defaultValue={values.improve_program}
                className={`form__textarea ${this.errorClass(
                  values.formErrors.improve_program
                )}`}
                id="improve_program"
                label="How could we improve our program for future interns?"
                multiline
                rows={14}
                required
                onChange={handleChange('improve_program')}
              />
              <div className="buttons-container">
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton onClick={this.continue}>Next</CustomButton>
              </div>
              <div className="dots-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot active"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep5;
