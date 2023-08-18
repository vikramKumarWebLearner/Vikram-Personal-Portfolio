import React from "react";
import "./about.css";
import Me from "../../asset/me-about.jpg";
import {FaAward} from 'react-icons/fa'
import {FiUsers}  from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about Image" />
          </div>
        </div>
      

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Expeience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>2 + WorldWide</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary  className="about__icon"/>
            <h5>Projects</h5>
            <small>10 + Completed</small>
          </article>
        </div>

         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo inventore ullam officia fugit, quia asperiores a, ratione fuga iure numquam 
          unde impedit et! Minima impedit obcaecati sequi atque nam.
         </p>

         <a href="#contact"  className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};
export default About;
