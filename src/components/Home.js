import React from 'react' 
import {Link} from 'react-router-dom'
import '../Styles/Home.css';



export function Home(props){
    return(
        <section className="hero" >

            {/* adds the isActive class based on value received from parent */}
            <div className={ `hero__text ${props.isActive ? 'active' : ''}`}>
                <h2 className="hero__heading"> Hi, my name is <span className="full-name">Joseph Busayo Jayeoba.</span> </h2>

                <p className="hero__p">I'm a <span className="spotlight">Web Developer</span> and <span className="spotlight">Coding Tutor</span>, my work is based on creating clear, user-centric web apps and sharing this expertise with others. </p>

                <div className="hero__link-wrapper">
                    <Link className="hero__link" to="/project"> See my projects</Link>
                    <Link className="hero__link" to="/about"> More about me</Link>
                </div>

                <div className="hero__social-wrapper">
                    <div> <img className="hero__social__image" src="./img/githubfilled.png"/> </div>
                    <div> <img className="hero__social__image" src="./img/linkedInfilled.png"></img></div>
                    <div> <img className="hero__social__image" src="./img/twitterfilled.png"></img></div>
                    <div> <img className="hero__social__image" src="./img/emailfilled.png"></img></div>
                </div>
            </div>

            <div>
                <div className="hero__box "></div>
                
                <div className="hero__box "></div>
                <div className="hero__box "></div>
                <div className="hero__box "></div>
                
                <div className="hero__box "></div>
                <div className="hero__box "></div>
                <div className="hero__box "></div>
                <div className="hero__box "></div>
                <div className="hero__box "></div>
                <div className="hero__box "></div>
            </div>
        </section>
    )
}