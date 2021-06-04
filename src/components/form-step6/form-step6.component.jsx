import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';
import FormErrors from '../form-errors/form-errors.component';

import './form-step6.styles.scss';

export class FormStep6 extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = async (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleChange, valid, errors } = this.props;

    return (
      <div className="layer6">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Intern Feedback Survey</h1>
            <h2>Thanks for all of your hard work!</h2>
            <FormErrors formErrors={errors} />
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="recommend_program"
                defaultValue={values.recommend_program}
                className={`form__textarea ${this.errorClass(
                  values.formErrors.firstName
                )}`}
                id="recommend_program"
                label="Would you recommend our internship program to a friend? Why or why not?"
                multiline
                rows={14}
                required
                onChange={handleChange('recommend_program')}
              />
              <div className="buttons-container">
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton
                  type="submit"
                  onClick={this.submit}
                  disabled={!valid}
                >
                  Submit
                </CustomButton>
              </div>
              <div className="dots-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep6;
