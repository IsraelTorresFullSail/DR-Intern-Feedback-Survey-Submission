import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CustomButton from '../custom-button/custom-button.component';

import './form-step1.styles.scss';

export class FormStep1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleChange, handleChangeDuration } = this.props;
    console.log();
    return (
      <div className="layer">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Intern Feedback Survey</h1>
            <h2>Thanks for all of your hard work!</h2>
            <p className="p-ghost">
              Fields with an <span className="required">*</span> are required
            </p>
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="firstName"
                defaultValue={values.firstName}
                className={`form__input ${this.errorClass(
                  values.formErrors.firstName
                )}`}
                id="firstName"
                label="First Name"
                required
                onChange={handleChange('firstName')}
              />
              <TextField
                type="text"
                name="lastName"
                defaultValue={values.lastName}
                className={`form__input ${this.errorClass(
                  values.formErrors.lastName
                )}`}
                id="lastName"
                label="Last Name"
                required
                onChange={handleChange('lastName')}
              />
              <TextField
                type="text"
                name="semester_year"
                defaultValue={values.semester_year}
                className={`form__input ${this.errorClass(
                  values.formErrors.semester_year
                )}`}
                id="semester_year"
                label="Semester/Year of Internship"
                required
                onChange={handleChange('semester_year')}
              />
              <FormControl
                className={`select__input ${this.errorClass(
                  values.formErrors.duration
                )}`}
              >
                <InputLabel>Duration of Internship</InputLabel>
                <Select
                  name="duration"
                  value={values.duration ? values.duration : ''}
                  onChange={(e) => handleChangeDuration(e.target.value)}
                  label="Duration of Internship"
                >
                  <MenuItem value="">
                    <em>Duration of Internship</em>
                  </MenuItem>
                  <MenuItem value={'0-1 months'}>0-1 months</MenuItem>
                  <MenuItem value={'2-3 months'}>2-3 months</MenuItem>
                  <MenuItem value={'4-6 months'}>4-6 months</MenuItem>
                  <MenuItem value={'6+ months'}>6+ months</MenuItem>
                </Select>
              </FormControl>
              <CustomButton onClick={this.continue}>Next</CustomButton>
              <div className="dots-wrapper">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
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

export default FormStep1;
