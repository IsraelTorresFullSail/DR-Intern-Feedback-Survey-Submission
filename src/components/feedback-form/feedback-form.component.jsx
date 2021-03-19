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
            companyName: '',
            relationshipFeedback: '',
            recommend: 'yes',
            whyRecommend: '',
            testimonial: '',
            services: {},
            formErrors: { firstName: '', lastName: '', companyName: '', relationshipFeedback: '', recommend: '', whyRecommend: '', testimonial: '', services: {} },
            firstNameValid: false,
            lastNameValid: false,
            companyNameValid: false,
            relationshipFeedbackValid: false,
            // recommendValid: false,
            whyRecommendValid: false,
            testimonialValid: false,
            // servicesValid: false,
            formValid: false,
            copied: false,
        }
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        e.persist()
        this.setState({ [input]: e.target.value }, () => {
            this.validateField(input, e.target.value);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let companyNameValid = this.state.companyNameValid;
        let relationshipFeedbackValid = this.state.relationshipFeedbackValid;
        // let recommendValid = this.state.recommendValid;
        let whyRecommendValid = this.state.whyRecommendValid;
        let testimonialValid = this.state.testimonialValid;
        // let servicesValid = this.state.servicesValid;
    
        switch (fieldName) {
          case 'firstName':
            firstNameValid = value.length >= 2;
            fieldValidationErrors.firstName = firstNameValid ? '' : ' is empty or too short';
            break;
          case 'lastName':
            lastNameValid = value.length >= 2;
            fieldValidationErrors.lastName = lastNameValid ? '' : ' is empty or too short';
            break;
          case 'companyName':
            companyNameValid = value.length >= 2;
            fieldValidationErrors.companyName = companyNameValid
              ? ''
              : ' is empty or too short';
            break;
          case 'relationshipFeedback':
            relationshipFeedbackValid = value.length >= 2;
            fieldValidationErrors.relationshipFeedback = relationshipFeedbackValid ? '' : ' is empty or too short';
            break;
        // case 'recommend':
        //     recommendValid = value.length >= 2;
        //     fieldValidationErrors.recommend = recommendValid ? '' : ' is empty or too short';
        //     break;
        case 'whyRecommend':
            whyRecommendValid = value.length >= 2;
            fieldValidationErrors.whyRecommend = whyRecommendValid ? '' : ' is empty or too short';
            break;
        case 'testimonial':
            testimonialValid = value.length >= 2;
            fieldValidationErrors.testimonial = testimonialValid ? '' : ' is empty or too short';
            break;
        // case 'services':
        //     servicesValid = value.length >= 1;
        //     fieldValidationErrors.services = servicesValid ? '' : ' is empty';
        //     break;
          default:
            break;
        }
        this.setState(
          {
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            companyNameValid: companyNameValid,
            relationshipFeedbackValid: relationshipFeedbackValid,
            //recommendValid: recommendValid,
            whyRecommendValid: whyRecommendValid,
            testimonialValid: testimonialValid,
            //servicesValid: servicesValid,
          },
          this.validateForm
        );
      }
    
      validateForm() {
        this.setState({
          formValid:
            this.state.firstNameValid &&
            this.state.lastNameValid &&
            this.state.companyNameValid &&
            this.state.relationshipFeedbackValid &&
            //this.state.recommendValid &&
            this.state.whyRecommendValid &&
            this.state.testimonialValid 
            //this.state.servicesValid,
        });
      }
    
      

    // Handle checkbox change
    handleCheckboxChange = e => {
        const { name } = e.target;
        this.setState( previousState => {
            const services = { ...previousState.services }; 
            services[name] = !services[name];
            return { services };
        });
    }

    // Handle submit 
    handleSubmit = e => {
        // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://usebasin.com/f/455b81f716b8";

        const { 
            firstName,
            lastName,
            companyName,
            relationshipFeedback,
            recommend,
            whyRecommend,
            testimonial,
            services,
        } = this.state;

        // Save testimonial to be copied in the next step
        localStorage.setItem('testimonial', this.state.testimonial);

        const servicesArray = Object.keys(services);
        const servicesReturn = servicesArray.join(", ");

        let formData = new FormData();
        formData.append('Subject', 'DR - Clients Feedback');
        formData.append('Client Info:', '');
        formData.append('First Name:', firstName);
        formData.append('Last Name:', lastName);
        formData.append('Company Name:', companyName);
        formData.append('What services the client receive:', servicesReturn);
        formData.append('What the clients like about their experience with Digital Resource:', relationshipFeedback);
        formData.append('Would the client recommend DR to a friend?', recommend);
        formData.append('Why?', whyRecommend);
        formData.append('Client Testimonial:', testimonial);

        let request = new XMLHttpRequest();
        request.open("POST", url);
        request.send(formData);

        this.setState({ redirect: true });
    }


    render() {
        const { step, redirect } = this.state;
        const { 
                firstName,
                lastName,
                companyName,
                relationshipFeedback,
                recommend,
                whyRecommend,
                testimonial,
                services,
                formErrors,
                copied
              } = this.state;
        const values = {
                        firstName,
                        lastName,
                        companyName,
                        relationshipFeedback,
                        recommend,
                        whyRecommend,
                        testimonial,
                        services,
                        formErrors,
                        copied
                    };

        return redirect? ( <Redirect to="/success" /> ) : (
            <div className="container">
                {(() => {
                    switch (step) {
                        case 1:
                            return (
                                <FormStep1 
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
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
                            (console.log('This is a multi-step form built with React.'))
                    }
                })()}
            </div>
        )
    }
}

export default FeedbackForm;
