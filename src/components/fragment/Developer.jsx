import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from '@material-ui/core';
import AvatarImage from '../assets/img/avatar.jpg';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

const Developer = () => {
  return (
    <div className={'Developer'}>
      <h3 className={'Developer-head'}>PROFILE</h3>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          <img src={AvatarImage} alt="Profile" />
          <div className={'Card-details'}>
            <h3>AMAN KUSHWAHA</h3>
            <p>MERN STACK DEVELOPER</p>
            <p>amankushwaha93@gmail.com</p>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p>
            I am a passionate MERN Stack developer with a relentless drive for learning and problem-solving.
          </p>
          <p>I'm a team player, a master of deadlines, and always ready to embrace the latest tech.</p>
          <p>User experience is my top priority, backed by solid security practices.</p>
          <br />
          <div className="Card-btn">
            <a
              className="facebook"
              target={'_blank'}
              href={'https://www.facebook.com/amankushwaha57'}
              title={'Facebook'}
            >
              <Facebook />
            </a>
            <a
              className="twitter"
              target={'_blank'}
              href={'https://twitter.com/amankushwaha57'}
              title={'Twitter'}
            >
              <Twitter />
            </a>
            <a
              className="instagram"
              target={'_blank'}
              href={'https://www.instagram.com/the_amankushwaha/'}
              title={'Instagram'}
            >
              <Instagram />
            </a>
            <a
              className="linkedin"
              target={'_blank'}
              href={'https://www.linkedin.com/in/amankushwaha57/'}
              title={'LinkedIn'}
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
