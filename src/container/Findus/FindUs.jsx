import React from 'react';

import { SubHeading } from '../../components';
import rest from '../../assets/rest.png';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Trouve Nous</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Paris, 32 avenue jean jaures, Pantin</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horaires D'ouvertures</p>
        <p className="p__opensans">Lun - Ven: 07h00 - 13h00</p>
        <p className="p__opensans">Sam - Dim: 07h00 - 21h00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Rendez nous visite</button>
    </div>

    <div className="app__wrapper_img">
      <img src={rest} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
