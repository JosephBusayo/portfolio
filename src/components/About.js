import React from 'react';
import '../Styles/About.css';


export function About(props){
    return(
        <section className={`about ${props.isActive ? 'active' : ''}`}>
            <div className="about__img-wrapper">
                <img 
                    src="./img/joseph.png" 
                    alt="joseph" 
                    className="about__img"
                    width="500" height="500"
                />
            </div>
            
            <div className="about__text-wrapper">
                <h2 className="about__title">
                    About
                </h2>

                <p className="about__p">
                    Wrote <span className="about__spotlight">'Hello world' in 2020</span> using <span className="about__spotlight">python.</span> Went from there to learn and use the python's <span className="about__spotlight">Django</span> framework in 2020.
                </p>

                <p className="about__p">
                     Worked at GTO in august 2021 as a python developer intern. I attended Classvisa bootcamp in 2022 where I've been able to horn my <span className="about__spotlight">HTML</span> & <span className="about__spotlight">CSS</span> skill, learnt and work with <span className="about__spotlight">JavaScript(ES6+), Nodejs</span> and also <span className="about__spotlight">React</span>
                </p>

                <p className="about__p">
                     I'm a part of WIP - a community where junior developers work together to build real life projects. I currently work as a backend developer at FountianPay but I'm <span className="about__spotlight">open to other opportunities</span>
                </p>

            </div>
        </section>
    )
}