import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './feedback-form.styles.scss';

import FormStep1 from '../form-step1/form-step1.component';
import FormStep2 from '../form-step2/form-step2.component';
import FormStep3 from '../form-step3/form-step3.component';
import FormStep4 from '../form-step4/form-step4.component';
import FormStep5 from '../form-step5/form-step5.component';

export class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      redirect: false,
      firstName: '',
      lastName: '',
      semester_year: '',
      duration: '',
      teams_worked: {},
      favorite_part: '',
      skills_gain: '',
      improve_program: '',
      recommend_program: '',
      formErrors: {
        firstName: '',
        lastName: '',
        semester_year: '',
        duration: '',
        teams_worked: {},
        favorite_part: '',
        skills_gain: '',
        improve_program: '',
        recommend_program: '',
      },
      firstNameValid: false,
      lastNameValid: false,
      semester_yearValid: false,
      durationValid: false,
      favorite_partValid: false,
      skills_gainValid: false,
      improve_programValid: false,
      recommend_programValid: false,
      formValid: false,
    };
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    e.persist();
    this.setState({ [input]: e.target.value }, () => {
      this.validateField(input, e.target.value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let semester_yearValid = this.state.semester_yearValid;
    let durationValid = this.state.durationValid;
    let favorite_partValid = this.state.favorite_partValid;
    let skills_gainValid = this.state.skills_gainValid;
    let improve_programValid = this.state.improve_programValid;
    let recommend_programValid = this.state.recommend_programValid;

    switch (fieldName) {
      case 'firstName':
        firstNameValid = value.length >= 2;
        fieldValidationErrors.firstName = firstNameValid
          ? ''
          : ' is empty or too short';
        break;
      case 'lastName':
        lastNameValid = value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid
          ? ''
          : ' is empty or too short';
        break;
      case 'semester_year':
        semester_yearValid = value.length >= 2;
        fieldValidationErrors.semester_year = semester_yearValid
          ? ''
          : ' is empty or too short';
        break;
      case 'duration':
        durationValid = value.length >= 2;
        fieldValidationErrors.duration = durationValid
          ? ''
          : ' is empty or too short';
        break;
      case 'favorite_part':
        favorite_partValid = value.length >= 2;
        fieldValidationErrors.favorite_part = favorite_partValid
          ? ''
          : ' is empty or too short';
        break;
      case 'skills_gain':
        skills_gainValid = value.length >= 2;
        fieldValidationErrors.skills_gain = skills_gainValid
          ? ''
          : ' is empty or too short';
        break;
      case 'improve_program':
        improve_programValid = value.length >= 2;
        fieldValidationErrors.improve_program = improve_programValid
          ? ''
          : ' is empty or too short';
        break;
      case 'recommend_program':
        recommend_programValid = value.length >= 2;
        fieldValidationErrors.recommend_program = recommend_programValid
          ? ''
          : ' is empty or too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        semester_yearValid: semester_yearValid,
        durationValid: durationValid,
        favorite_partValid: favorite_partValid,
        skills_gainValid: skills_gainValid,
        improve_programValid: improve_programValid,
        recommend_programValid: recommend_programValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.semester_yearValid &&
        this.state.durationValid &&
        this.state.favorite_partValid &&
        this.state.skills_gainValid &&
        this.state.improve_programValid &&
        this.state.recommend_programValid,
    });
  }

  // Handle select input
  handleChangeDuration = (durationSelected) => {
    this.setState({ duration: durationSelected });
  };

  // Handle checkbox change
  handleCheckboxChange = (e) => {
    const { name } = e.target;
    this.setState((previousState) => {
      const teams_worked = { ...previousState.teams_worked };
      teams_worked[name] = !teams_worked[name];
      return { teams_worked };
    });
  };

  // Handle submit
  handleSubmit = (e) => {
    const url = 'https://usebasin.com/f/af7afa0b5ce6';

    const {
      firstName,
      lastName,
      semester_year,
      duration,
      teams_worked,
      favorite_part,
      skills_gain,
      improve_program,
      recommend_program,
    } = this.state;

    const teamsArray = Object.keys(teams_worked);
    const teamsReturn = teamsArray.join(', ');

    let formData = new FormData();
    formData.append('Subject', 'DR - Intern Feedback Survey Submission');
    formData.append('Intern Info:', '');
    formData.append('First Name:', firstName);
    formData.append('Last Name:', lastName);
    formData.append('Semester/Year of Internship:', semester_year);
    formData.append('Duration of Internship:', duration);
    formData.append('Feedback:', '');
    formData.append('Teams Worked on During Internship:', teamsReturn);
    formData.append(
      'What was your favorite part of being an intern at Digital Resource?',
      favorite_part
    );
    formData.append(
      'What new skills, techniques, and knowledge did you gain during your internship?',
      skills_gain
    );
    formData.append(
      'How could we improve our program for future interns? :',
      improve_program
    );
    formData.append(
      'Would you recommend our internship program to a friend? Why or why not?:',
      recommend_program
    );

    let request = new XMLHttpRequest();
    request.open('POST', url);
    request.send(formData);

    this.setState({ redirect: true });
  };

  render() {
    const { step, redirect } = this.state;
    const {
      firstName,
      lastName,
      semester_year,
      duration,
      teams_worked,
      favorite_part,
      skills_gain,
      improve_program,
      recommend_program,
      formErrors,
    } = this.state;
    const values = {
      firstName,
      lastName,
      semester_year,
      duration,
      teams_worked,
      favorite_part,
      skills_gain,
      improve_program,
      recommend_program,
      formErrors,
    };

    return redirect ? (
      <Redirect to="/success" />
    ) : (
      <div className="container">
        {(() => {
          switch (step) {
            case 1:
              return (
                <FormStep1
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  handleChangeDuration={this.handleChangeDuration}
                  values={values}
                />
              );
            case 2:
              return (
                <FormStep2
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleCheckboxChange}
                  values={values}
                />
              );
            case 3:
              return (
                <FormStep3
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 4:
              return (
                <FormStep4
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 5:
              return (
                <FormStep5
                  prevStep={this.prevStep}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  values={values}
                  valid={this.state.formValid}
                  errors={this.state.formErrors}
                />
              );
            default:
              console.log('This is a multi-step form built with React.');
          }
        })()}
      </div>
    );
  }
}

export default FeedbackForm;
