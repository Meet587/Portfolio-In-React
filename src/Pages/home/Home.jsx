import React from "react";
import './home.scss'

const Home = () => {
  return (
    <>
      <section id="home" className="home">


        <div className="home-hero">
          <div className="logos">
            <a
              href="https://github.com/Meet587"
              target="_blank"
              className="github"
            >
              Github <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/meet-rakholiya-115524221/"
              target="_blank"
              className="linkedin"
            >
              linkedIn <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" className="twitter">
              Twitter <i className="fa-brands fa-square-twitter"></i>
            </a>
          </div>
          <div className="main-contain">
            <div className="heading">
              <h3>HEY, I'M MEET RAKHOLIYA</h3>
            </div>
            <div className="home-hero_contain">
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className="project-hero_btn">
              <button className="project-btn" type="button">
                PROJECT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
