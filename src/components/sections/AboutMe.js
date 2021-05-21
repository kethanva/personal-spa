import Badge from "../elements/Badge";
import Resume from "../../resume.json";
import React from "react";

function AboutMe() {
    return (
        <section className="section has-background-link" id="aboutMe">
            <div className="container has-text-centered">
                <figure className="image container is-100x100">
                    <img
                        width="30px"
                        height="30px"
                        src={Resume.basics.picture}
                        alt={Resume.basics.name}
                        className="is-rounded"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = Resume.basics.x_pictureFallback
                        }}
                    />
                </figure>
                <br/>
                <br/>
                <p className="subtitle is-4 has-text-white has-text-weight-bold">
                    {Resume.basics.x_title}&nbsp;<i className=" fa-1x fas fa-grin-alt"></i>
                </p>
                <div className="container interests">
                    <div className="field is-grouped is-grouped-multiline has-text-centered">
                        {Resume.interests.map((value, index) => {
                            return (
                                <Badge key={index} text={value.name} faIcon={value.x_icon}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
