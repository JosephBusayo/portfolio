import React, {useState} from 'react' 
import '../Styles/Home.css';


export default function Home(){
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () =>{
        setIsActive(isActive === true ? false : true)
        console.log(isActive)
    }
    return(
        <section className="home">
            <span className="overlay"></span>
            <header>
                <section> 
                    <img className={`logo ${isActive ? 'active' : ''}`} src="./img/logo.png" alt="JB"/>

                    <button
                        className={`menu-btn ${isActive ? 'active': ''} `}
                        onClick={toggleActive}
                     >
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                    </button>
                </section>

                <nav className={`nav ${isActive ? 'active' : ''}`}>
                    <ol className="nav__menu">
                        <li> <a href="#/">Home</a> </li>
                        <li> <a href="#/">About</a> </li>
                        <li> <a href="#/">Projects</a> </li>
                        <li> <a href="#/">Contact</a> </li>
                    </ol>
                </nav>
            </header>

            <section className={ `hero ${isActive ? 'active' : ''}`}>
                <div className="hero__text">
                    <h2 className="hero__heading"> Hi, my name is <span className="full-name">Joseph Busayo Jayeoba.</span> </h2>

                    <p className="hero__p">I'm a <span className="spotlight">Web Developer</span> and <span className="spotlight">Coding Tutor</span> focused on building creative, concise and user centered web applications and also passing this knowledge to others.</p>

                    <div className="hero__link-wrapper">
                        <a className="hero__link" href="#/"> See my projects</a>
                        <a className="hero__link" href="#/"> More about me</a>
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

        </section>
    )
}