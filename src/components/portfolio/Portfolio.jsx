import React from "react";
import './portfolio.css'
import IMG1 from  '../../asset/portfolio1.jpg'
import IMG2 from  '../../asset/portfolio2.jpg'
import IMG3 from  '../../asset/portfolio3.jpg'
import IMG4 from  '../../asset/portfolio4.jpg'
import IMG5 from  '../../asset/portfolio5.png'
import IMG6 from  '../../asset/portfolio6.jpg'

// const data = [{
//      id: 1,
//      image: IMG1,
//      title: 'Hello',
//      github: 'https://www.github.com/',
//      demo: 'https://dribbble.com',
// }]


const  Portfolio= () =>{
  return (
     <section  id="portfolio">
      <h5>My  Recenet Work </h5>
      <h2>Portfolio</h2>


      <div className="container  portfolio__container">
            {/* {
              data.map(({id,image,title,github , demo}) => {
                return (
                  <article  key={id}  className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                   <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                   <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                  </div>
              </article>
                )
              })
            } */}
             <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
                </div>
                 <h3>News Site</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/vikramKumarWebLearner/news-site" className="btn" target="__blank">Github</a>
                 <a href="https://dribbble.com/" className="btn btn-primary" target="__blank" >Live Demo</a>
                </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG2} alt="" />
                </div>
                 <h3>Experience  tracker</h3>
                 <div className="portfolio__item-cta">
                 <a href="https://github.com/vikramKumarWebLearner/experience-tracker" className="btn" target="__blank">Github</a>
                 <a href="https://dribbble.com/" className="btn btn-primary" target="__blank">Live Demo</a>
                 </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG3} alt="" />
                </div>
                 <h3>Social Site</h3>
                 <div className="portfolio__item-cta">
                 <a href="https://github.com/vikramKumarWebLearner/Social-site" className="btn" target="__blank">Github</a>
                 <a href="https://dribbble.com/" className="btn btn-primary" target="__blank">Live Demo</a>
                 </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG4} alt="" />
                </div>
                 <h3>To-do list  Angular App</h3>
                 <div className="portfolio__item-cta">
                 <a href="https://github.com/vikramKumarWebLearner/To-do-list---Angular-App" className="btn" target="__blank">Github</a>
                 <a href="https://dribbble.com/" className="btn btn-primary" target="__blank">Live Demo</a>
                 </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG5} alt="" />
                </div>
                 <h3>Weather App JavaScript</h3>
                 <div className="portfolio__item-cta">
                 <a href="https://github.com/vikramKumarWebLearner/Weather-Web" className="btn" target="__blank">Github</a>
                 <a href="https://dribbble.com/" className="btn btn-primary" target="__blank">Live Demo</a>
                 </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG6} alt="" />
                </div>
                 <h3>News letter App Node Js</h3>
                 <div className="portfolio__item-cta">
                 <a href="https://github.com/vikramKumarWebLearner/newsletter" className="btn" target="__blank">Github</a>
                 <a href="https://dribbble.com/" className="btn btn-primary" target="__blank">Live Demo</a>
                 </div>
            </article>
      </div>
     </section>
  )

}
export default Portfolio;