import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Abonnez-Vous À Notre Newsletter</h1>
      <p className="p__opensans">Et Ne Manquez Jamais Les Dernières Mises À Jour !</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">S'abonner</button>
    </div>
  </div>
);

export default Newsletter;
