import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';

import './form-step3.styles.scss';

export class FormStep3 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    errorClass(error) {
        return error.length === 0 ? '' : 'has-error';
    };
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="layer3">
                <div className="digital-name"></div>
                <div className="white-box">
                    <div className="logo"></div>
                    <div className="form-container">
                        <h1>Client Feedback</h1>
                        <h2>Your continued success is very important to us!</h2>
                        <div className="fields-wrapper">
                            <TextField 
                                type="text"
                                name="relationshipFeedback"
                                defaultValue={values.relationshipFeedback}
                                className={`form__textarea ${this.errorClass(
                                    values.formErrors.relationshipFeedback
                                )}`}
                                id="relationshipFeedback"
                                label="What did you like about your experience with Digital Resource?"
                                multiline
                                rows={14}
                                required
                                onChange={handleChange('relationshipFeedback')}
                            />
                            <div className="buttons-container">
                                <CustomButton onClick={this.back}>Back</CustomButton>
                                <CustomButton onClick={this.continue}>Next</CustomButton>
                            </div>
                            <div className="dots-wrapper">
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
        )
    }
}

export default FormStep3;
