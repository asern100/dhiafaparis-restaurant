import React from 'react';
import knife from '../../assets/knife.png';
import spoon from '../../assets/spoon.png';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">À Propos De Nous</h1>
        <img src={spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Nous avons envoyé ce projet pour tout tunisien qui aspire à la Tunisie ou pour un non tunisien qui veut découvrir la cuisine tunisienne.<br />Dans notre restaurant vous vous sentez comme si vous étiez en Tunisie</p>
        <button type="button" className="custom__button"><a href="#contact">Savoir plus</a></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre Histoire</h1>
        <img src={spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">L'histoire de notre cuisine remonte à 3000 ans, il y a la civilisation berbère, Notre histoire remonte aux Romains, à Carthagène, aux Berbères
Lorsque vous dégustez une cuillerée de notre nourriture, vous trouvez l'extase d'une saveur mélangée de plusieurs civilisations</p>
        <button type="button" className="custom__button"><a href="#contact">Savoir plus</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
