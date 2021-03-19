/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './success.styles.scss';

import fbImage from '../../assets/facebook.svg';
import ggImage from '../../assets/google.png';
import ypImage from '../../assets/yelp.png';

import {CopyToClipboard} from 'react-copy-to-clipboard';

class Success extends Component {
    state = {
            testimonial: '',
            copied: false,
        }

    componentDidMount() {
        const testimonial = localStorage.getItem('testimonial')
        this.setState({testimonial})
    }
    copy = () => {
        this.props.handleCopy();
    }

    render() {
        return (
            <div className="container">
                <div className="layer6">
                    <div className="digital-name"></div>
                    <div className="white-box6">
                        <div className="success-container-text">
                            <div className="success-left">
                                <div className="content">
                                    <h1>Thank you!</h1>
                                    <p>We appreciate your feedback! Want to help other businesses future-proof their online presence? Click below to copy your testimonial and post it on Facebook, Google, and/or Yelp!</p>
                                    <CopyToClipboard className="copy-testimonial" text={this.state.testimonial} onCopy={() => this.setState({copied: true})}>
                                        <p>Copy Testimonial</p>
                                    </CopyToClipboard>
                                    {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                                </div>
                                <div className="social-media-container">
                                    <a href="https://www.facebook.com/DigitlResource/reviews/" className="social-media-link" target="_blank">
                                        <div className="sm-logo-fb">
                                            <img src={fbImage} alt="Facebook"/>
                                        </div>
                                        <p>Facebook</p>
                                    </a>
                                    <a href="https://g.page/digitalresource/review?gm" className="social-media-link" target="_blank">
                                        <div className="sm-logo-gg">
                                            <img src={ggImage} alt="Google"/>
                                        </div>
                                        <p>Google</p>
                                    </a>
                                    <a href="https://www.yelp.com/biz/digital-resource-west-palm-beach" className="social-media-link" target="_blank">
                                        <div className="sm-logo-yp">
                                            <img src={ypImage} alt="Yelp"/>
                                        </div>
                                        <p>Yelp</p>
                                    </a>
                                </div>
                            </div>
                            <div className="success-right">
                                <h2 className="h2-white">A huge thanks from the whole team!</h2>
                                <div className="logo6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Success;