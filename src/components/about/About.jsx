import React from "react";
import "./about.css";
import Me from "../../asset/vikram-about.png";
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
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
              <FaAward className="about__icon" />
              <h5>Expeience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5 + WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10 + Completed</small>
            </article>
          </div>

          <p>
            Full Stack Developer with 3+ years of experience in building and maintaining scalable web applications. Proven ability to develop secure, high-performance solutions and contribute to successful project delivery. Strong team player with a focus on clean code, problem-solving, and continuous improvement. Seeking to grow in a dynamic MNC environment with opportunities for learning and innovation.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
