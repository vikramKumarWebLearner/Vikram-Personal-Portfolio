import './portfolio.css'
import IMG1 from '../../asset/portfolio1.png'
import IMG2 from '../../asset/portfolio2.png'
import IMG3 from '../../asset/portfolio3.png'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.png'
import IMG6 from '../../asset/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
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
            <img src={IMG1} alt="" height="238" />
          </div>
          <h3>Aanjana Rakt Mitra</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com/vikramKumarWebLearner/news-site" className="btn" target="__blank">Github</a> */}
            <a href="https://play.google.com/store/apps/details?id=com.upper.digital.arm&hl=en_IN" className="btn btn-primary" target="__blank" >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" height="238" />
          </div>
          <h3>S3 Library</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com/vikramKumarWebLearner/experience-tracker" className="btn" target="__blank">Github</a> */}
            <a href="https://partner.s3library.com/dashboard" className="btn btn-primary" target="__blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" height="238" />
          </div>
          <h3>Experience Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/vikramKumarWebLearner/experience-tracker" className="btn" target="__blank">Github</a>
            {/* <a href="https://dribbble.com/" className="btn btn-primary" target="__blank">Live Demo</a> */}
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