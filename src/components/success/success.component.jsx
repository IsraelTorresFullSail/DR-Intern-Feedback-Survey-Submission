/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
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
                  <p>
                    We loved having you as part of the #DReamteam and can’t wait
                    to see your career evolve!
                  </p>
                  <p>#WeAreDR</p>
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
