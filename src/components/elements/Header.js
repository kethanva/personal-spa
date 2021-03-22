import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
    return (
        <section className="hero is-dark is-fullheight has-bg-image">
            <div className="hero-head">
                <NavBar/>
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle is-5 has-text-weight-light">I'm a</p>
                    <h4 className="title">
                        <div className="rw-words-1">
                            <span>Full Stack Developer</span>
                            <span>Software Architect</span>
                            <span>SRE</span>
                            <span>DevOps Engineer</span>
                            <span>Scrum Master</span>
                            <span>Cloud Guru</span>
                        </div>
                    </h4>
                    <br/>
                    <br/>
                    <h2 className="subtitle">
                        {Resume.basics.location.region}, {Resume.basics.location.country}
                    </h2>
                    <div className="columns small-container">
                        {Resume.basics.profiles.map((value, index) => {
                            return (
                                <div key={index} className="column has-text-centered">
                                    <a href={value.url}
                                        target="blank"
                                        className="is-hovered"
                                        title={value.url} >
                                          <span className="icon is-medium is-">
                                            <i className={value.x_icon}></i>
                                          </span>
                                    </a>
                                </div>
                            ); })}
                        <div className="column"></div>
                    </div>
                </div>
            </div>

            <div className="hero-foot" style={{paddingBottom: "20px"}}>
            </div>

            <span className="align-right container" >
                <a href="#aboutMe"> <i className="fa-1.2x fa fa-chevron-circle-down"></i></a>
            </span>
        </section>


    );
}

export default Hero;
