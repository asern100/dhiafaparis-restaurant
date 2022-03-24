import React from 'react';

import { SubHeading } from '../../components';
import chef from '../../assets/chef.png';
import sign from '../../assets/sign.png';
import quote from '../../assets/quote.png';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Le Mot Du Chef" />
      <h1 className="headtext__cormorant">En Quoi Nous Croyons</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Foulen Elfouleni</p>
        <p className="p__opensans">Cuisinier & Fondateur</p>
        <img src={sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
