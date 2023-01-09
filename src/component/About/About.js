import aboutImg from "../../images/about.jpeg"

const About = () => {
  return (
    <section className="about">
        <div className="aboutSection">
            <div className="aboutImg">
                <img className="about-img" src={aboutImg} alt="about" />
            </div>
            <article className="about-article">
            <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a className="read-more" href='...' >
            Read more...
          </a>
            </article>
        </div>
      
    </section>
  )
}

export default About
