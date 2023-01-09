import style from "./hero.module.css"


const Hero = () => {
  return (
    <section>
      <div className={style.heroSection}>
       <div className={style.heroTitle} >
       <h1>Safe Hike</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href='#tours' className={style.heroBtn} >
          explore tours
        </a>
       </div>
      </div>
    </section>
  );
}

export default Hero;
