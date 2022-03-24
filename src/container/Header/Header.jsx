import React from 'react';

import { SubHeading } from '../../components';
// import { images } from '../../constants';
import welcome from '../../assets/welcome4.png';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chassez La Nouvelle Saveur" />
      <h1 className="app__header-h1">La Clé De La Gastronomie</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>La splendeur de la cuisine tunisienne, le goût irrésistible, nous vous l'offrons avec la qualité du service et la saveur de l'amour</p>
      <button type="button" className="custom__button" ><a href="#menu">Explorer le menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
