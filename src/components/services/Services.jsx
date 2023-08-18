import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'

const  Services = () =>{
  return (
     <section  id="services">
        <h5>What  I offer</h5>
        <h2>Services</h2>


        <div className="container services__container">
          <article className="service">
             <div className="service__head">
               <h3>UI/UX  Design</h3>
             </div>

             <ul className="service__list">
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p>UX design is all about identifying and solving user problems.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p> UI design is all about creating intuitive, aesthetically-pleasing, interactive interfaces.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p> UX design usually comes first in the product development process, followed by UI.</p>
                   </li>
             </ul>
          </article>

          <article className="service">
             <div className="service__head">
               <h3>Web Development</h3>
             </div>

             <ul className="service__list">
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p>Web development is the building and maintenance of websites.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p> it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p> Web developers, or 'devs', do this by using a variety of coding languages.</p>
                   </li>
             </ul>
          </article>

          <article className="service">
             <div className="service__head">
               <h3>Content  Creation</h3>
             </div>

             <ul className="service__list">
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p>A content creation strategy ensures your content supports your goals.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p> It improves your ROI.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p>You can identify what's working—and refine as you go.</p>
                   </li>
                   <li>
                      <BiCheck  className="service__list-icon"/>
                      <p> A content strategy keeps everyone on the same page.</p>
                   </li>
             </ul>
          </article>
        </div>
      </section>
  )

}
export default Services;