import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Checkbox from '../checkbox/checkbox.component';

import './form-step2.styles.scss';

export class FormStep2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

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
            <div className="layer2">
                <div className="digital-name"></div>
                <div className="white-box">
                    <div className="logo"></div>
                    <div className="form-container">
                        <h1>Client Feedback</h1>
                        <h2>Your continued success is very important to us!</h2>
                        <div className="box">
                            <p className="p">What services did you receive? (Click all that apply)</p>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Responsive Web Design"
                                    value={values.services["Responsive Web Design"]}
                                    onChange={handleChange}
                                />
                            <p>Responsive Web Design</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Social Media Marketing"
                                    value={values.services["Social Media Marketing"]}
                                    onChange={handleChange}
                                />
                                <p>Search Engine Optimization</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Facebook Ads"
                                    value={values.services["Facebook Ads"]}
                                    onChange={handleChange}
                                />
                                <p>Social Media Marketing</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Local Search Optimization"
                                    value={values.services["Local Search Optimization"]}
                                    onChange={handleChange}
                                />
                                <p>Google Ads</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Link Building And Content"
                                    value={values.services["Link Building And Content"]}
                                    onChange={handleChange}
                                />
                                <p>Facebook Ads</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Photography"
                                    value={values.services["Photography"]}
                                    onChange={handleChange}
                                />
                                <p>Outsourced Live Chat</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Content Marketing"
                                    value={values.services["Content Marketing"]}
                                    onChange={handleChange}
                                />
                                <p>Local Search Optimization</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Search Engine Optimization"
                                    value={values.services["Search Engine Optimization"]}
                                    onChange={handleChange}
                                />
                                <p>Map Optimization</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Google Ads"
                                    value={values.services["Google Ads"]}
                                    onChange={handleChange}
                                />
                                <p>Link Building and Content</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Outsourced Live Chat"
                                    value={values.services["Outsourced Live Chat"]}
                                    onChange={handleChange}
                                />
                                <p>Email Marketing</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Map Optimization"
                                    value={values.services["Map Optimization"]}
                                    onChange={handleChange}
                                />
                                <p>Photography</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Email Marketing"
                                    value={values.services["Email Marketing"]}
                                    onChange={handleChange}
                                />
                                <p>Videography</p>
                            </div>
                            <div className='checkbox-wrapper'>
                                <Checkbox
                                    name="Videography"
                                    value={values.services["Videography"]}
                                    onChange={handleChange}
                                />
                                <p>Content Marketing</p>
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
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default FormStep2;
