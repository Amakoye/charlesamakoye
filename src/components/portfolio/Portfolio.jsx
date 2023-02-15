import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Solutions to Frontend Mentor Challenges",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
    github: "http://github.com",
    demo: "https://www.frontendmentor.io/profile/Amakoye",
    isPrivate: false,
  },
  {
    id: 2,
    img: IMG2,
    title: "Data Alma Company Website",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
    github: "#",
    demo: "https://testdataalma.netlify.app/",
    isPrivate: false,
  },

  {
    id: 4,
    img: IMG4,
    title: "E-HealthPost",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
    github: "http://github.com",
    demo: "http://dribble.com",
    isPrivate: true,
  },

  {
    id: 5,
    img: IMG6,
    title: "Mazao Data",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsum.",
    github: "http://github.com",
    demo: "http://dribble.com",
    isPrivate: false,
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>

      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, img, title, subtitle, github, demo, isPrivate }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>

            <div className="cta">
              {!isPrivate && (
                <>
                  <a
                    href={`${github}`}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
