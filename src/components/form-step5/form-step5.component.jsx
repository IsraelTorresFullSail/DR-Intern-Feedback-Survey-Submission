import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';
import FormErrors from '../form-errors/form-errors.component';

import './form-step5.styles.scss';

export class FormStep5 extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    submit = async event => {
        event.preventDefault();
        this.props.handleSubmit();
    }

    errorClass(error) {
        return error.length === 0 ? '' : 'has-error';
    };

    render() {
        const { values, handleChange, valid, errors } = this.props;
        
        return (
            <div className="layer5">
                <div className="digital-name"></div>
                <div className="white-box">
                    <div className="logo"></div>
                    <div className="form-container">
                        <h1>Client Feedback</h1>
                        <h2>Your continued success is very important to us!</h2>
                        <FormErrors formErrors={errors} />
                        <div className="fields-wrapper">
                            <TextField 
                                type="text"
                                name="testimonial"
                                defaultValue={values.testimonial}
                                className={`form__textarea ${this.errorClass(
                                    values.formErrors.firstName
                                )}`}
                                id="testimonial"
                                label="We'd love to hear more! Would you like to submit a testimonial?"
                                multiline
                                rows={14}
                                required
                                onChange={handleChange('testimonial')}
                            />
                            <div className="buttons-container">
                                <CustomButton onClick={this.back}>Back</CustomButton>
                                <CustomButton type="submit" onClick={this.submit} disabled={!valid}>Submit</CustomButton>
                            </div>
                            <div className="dots-wrapper">
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
        )
    }
}

export default FormStep5;
