import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';

import './form-step4.styles.scss';

export class FormStep4 extends Component {
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
            <div className="layer4">
                <div className="digital-name"></div>
                <div className="white-box">
                    <div className="logo"></div>
                    <div className="form-container">
                        <h1>Client Feedback</h1>
                        <h2>Your continued success is very important to us!</h2>
                        <div className='radio-buttons-wrapper'>
                            <label className="form-labels" htmlFor="recommend">
                                <p className="span">Would you recommend DR to a friend?</p>
                                <label className='form__labelInline' htmlFor="yes">
                                    <input
                                        type="radio"
                                        name="recommend"
                                        value={values.recommend === 'yes'}
                                        className='form__input__radio'
                                        id="yes"
                                        onChange={handleChange}
                                    />
                                    <span> Yes</span>
                                </label>
                                <label className='form__labelInline' htmlFor="no">
                                    <input
                                        type="radio"
                                        name="recommend"
                                        value={values.recommend === 'no'}
                                        className='form__input__radio'
                                        id="no"
                                        onChange={handleChange}
                                    />
                                    <span> No</span>
                                </label>
                            </label>
                        </div>
                        <div className="fields-wrapper">
                            <TextField 
                                type="text"
                                name="whyRecommend"
                                defaultValue={values.whyRecommend}
                                className={`form__textarea ${this.errorClass(
                                    values.formErrors.firstName
                                )}`}
                                id="whyRecommend"
                                label="Why?"
                                multiline
                                rows={8}
                                required
                                onChange={handleChange('whyRecommend')}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormStep4;
