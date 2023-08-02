import React from 'react';
import about from "../../images/about.jpg";
import './about.css';

const About = () =>  {
   return (
      <div className="about">
         <h1>About Us</h1>
         <p className="about-header">LifeSpace is a blog about healthy living and wellness.</p>
         <img src={ about } alt="about us" />
         <p className="about-content">LifeSpace is a blog dedicated to healthy living and wellness. We believe that health is the most valuable asset that anyone could have, which is why we created this blog.

            Our mission is to help people live happier, healthier lives by providing useful information and tips on nutrition, fitness, and mental health. We hope that you will find valuable information on our blog and apply it to your daily life to improve your health.

            LifeSpace provides a wealth of useful information on topics related to physical and mental health, from simple exercises to yoga and beginner workout guides. In addition, we also provide information on healthy eating habits to help you maintain a healthy diet.

            Moreover, we share articles on mental health to help you relieve stress and eliminate negative thoughts. We also share self-care skills and ways to keep your mind fresh and creative.

            Visit our blog to learn more about topics related to health and wellness. We believe that with proper care, you can live a healthy and happy life.</p>
      </div>
   );
}

export default About;