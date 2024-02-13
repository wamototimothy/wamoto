import React from "react";
import "./about.css";
import myImage from "../../assets/wamoto.jpg"
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bsc.(Hons) Information Systems and Technology <br />
                <i>Makerere University.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current Profession</h5>
              <small>Software Developer</small>
            </article>

            {/* <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Net Centric</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article> */}
          </div>
          <p>
            I'm a <b style={{color:'black'}}>Software Developer </b> at the <b>Uganda Revenue Authority. &nbsp;</b>
            <br /> 
            I'm an enthusiastic and self-driven Software developer with an aim
            of being apart of the Modern Technology Drivers in my Country and
            beyond. I am open to challenging opportunities so as to apply and
            expand my technical skills in software Development. With a strong
            foundation in software engineering at the Revenue and hands-on
            experience in various programming languages, I am eager to
            contribute to innovative projects and learn from experienced
            professionals in the industry. I am a quick learner who is always
            ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
