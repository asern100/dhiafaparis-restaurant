import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import spoon from '../../assets/spoon.png';
import dhiafa from '../../assets/dhiafaLogo.png';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Nous Contacter</h1>
        <p className="p__opensans">Paris, 32 avenue jean jaures, Pantin</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={dhiafa} alt="footer_logo" />
        <p className="p__opensans">&quot;La Meilleure Façon De Se Retrouver, C'est De Se Perdre Au Service Des Autres.&quot;</p>
        <img src={spoon} className="spoon__img" alt='spoon' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram  onClick={() => window.location.href = "https://www.instagram.com/dhiafaparis/"}/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Heures D'ouverture</h1>
        <p className="p__opensans">Lundi Vendredi:</p>
        <p className="p__opensans">07h00 - 13h00</p>
        <p className="p__opensans">Samedi Dimanche:</p>
        <p className="p__opensans">07h00 - 21h00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 DHIAFAPARIS. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
