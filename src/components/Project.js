import React from 'react';
import '../Styles/Project.css';
import ProjectData from './ProjectData'


export function Project(props){
    return(
        <section className={`project ${props.isActive ? 'active' : ''}`}>

            {ProjectData.map((data) => (
                <div className="project__card">
                    <div className="project__content">
                        <h2 className="project__title">{data.title}</h2>
                    </div>
                    <div>
                        <p className="project__p">{data.description}</p>
                    </div>
                    
                    <div className="project__link-wrapper">
                        <div className="project__link">
                            <a href={data.gitlink} target="_blank" rel="noreferrer"> <img className="project__icon" src="./img/github.png" alt="git link" /></a>
                            <a href={data.livelink} target="_blank" rel="noreferrer"> <img className="project__icon" src="./img/web.png" alt="live link"/></a>
                        </div>

                        <div className="project__tools">
                            {data.tools}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

