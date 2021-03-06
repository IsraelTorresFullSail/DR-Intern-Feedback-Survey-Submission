import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';

import './form-step4.styles.scss';

export class FormStep4 extends Component {
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
      <div className="layer4">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Intern Feedback Survey</h1>
            <h2>Thanks for all of your hard work!</h2>
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="skills_gain"
                defaultValue={values.skills_gain}
                className={`form__textarea ${this.errorClass(
                  values.formErrors.skills_gain
                )}`}
                id="skills_gain"
                label="What new skills, techniques, and knowledge did you gain during your internship?"
                multiline
                rows={14}
                required
                onChange={handleChange('skills_gain')}
              />
              <div className="buttons-container">
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton onClick={this.continue}>Next</CustomButton>
              </div>
              <div className="dots-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep4;
