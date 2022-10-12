import React from 'react';
import '../Styles/About.css';


export default function About(){
    return(
        <section className="about">
            <div className="about__img-wrapper">
                <img 
                    src="./img/joseph.png" 
                    alt="joseph" 
                    className="about__img"
                    width="500" height="500"
                />
            </div>
            
            <h2 className="about__title">
                Get to know me
            </h2>

            <div className="about__text-wrapper">
                <p className="about__p">
                    Wrote <span className="about__spotlight">'Hello world' in 2019</span> using <span className="about__spotlight">python.</span> Went from there to learn and use the python's <span className="about__spotlight">tkinter</span> and <span className="about__spotlight">Django</span> frameworks in 2020.
                </p>

                <p className="about__p">
                     Worked with a startup in august 2021 as a python(django) developer intern. So far in 2022 I've attended two bootcamps where I've been able to horn my <span className="about__spotlight">HTML</span> & <span className="about__spotlight">CSS</span> skill, learn and work with <span className="about__spotlight">JavaScript(ES6+)</span> and also <span className="about__spotlight">React</span>
                </p>

                <p className="about__p">
                     I'm currently a student at <span className="about__spotlight"> <a href="http://classvisa.com">Classvisa</a></span> and head the dev team at WIP startup.
                </p>

            </div>
        </section>
    )
}