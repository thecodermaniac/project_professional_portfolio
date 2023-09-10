import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/_infinityXzod">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/thecodermaniac">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/aritra-mondal-66a974179/">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
