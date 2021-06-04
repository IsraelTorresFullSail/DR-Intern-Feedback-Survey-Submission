/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import gdImage from '../../assets/glassdoor.png';
import './success.styles.scss';

class Success extends Component {
  state = {
    testimonial: '',
    copied: false,
  };

  componentDidMount() {
    const testimonial = localStorage.getItem('testimonial');
    this.setState({ testimonial });
  }
  copy = () => {
    this.props.handleCopy();
  };

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
                  <p className="p-last">
                    We appreciate your honest feedback! Kudos to you for all of
                    your hard work!
                  </p>
                  <p>
                    Want to spread the word? We'd love it if you left us a
                    review.
                  </p>
                  <p className="p-step">
                    <span className="p-strong">Step 1: </span> Click to Leave a
                    Review
                  </p>
                  <CopyToClipboard
                    className="copy-testimonial"
                    text={this.state.testimonial}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <p>Copy</p>
                  </CopyToClipboard>
                  {this.state.copied ? (
                    <span style={{ color: 'red' }}>Copied.</span>
                  ) : null}
                </div>
                <div className="social-media-container">
                  <p className="p-step">
                    <span className="p-strong">Step 2: </span> Click to Share
                  </p>
                  <a
                    href="https://www.glassdoor.com/Reviews/Digital-Resource-Reviews-E1027153.htm"
                    className="social-media-link"
                    target="_blank"
                  >
                    <div className="sm-logo-gg">
                      <img
                        src={gdImage}
                        alt="Glassdoor"
                        className="glassdoor-img"
                      />
                    </div>
                    <p className="p-share">Share to Glassdoor</p>
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
