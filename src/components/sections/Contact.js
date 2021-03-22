import React from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            display: "block",
            marginBottom:"0.7rem",
            height: 1
        }}
    />
);

function Contact() {
  return (
      <section className="section" id="contact">
          <div className="container">
              <div className="text-center">
                  <ColoredLine color="brown" />
                  <a href="mailto:kethan.inbox@gmail.com"><img src="images/icons/gmail.png"  className={"contact-image"} /></a>
                  <a href="mailto:kethan@kethan.in"><img src="images/icons/email.png" className={"contact-image"}/></a>
                  <a href="https://linkedin.com/in/kethan-va"><img src="images/icons/linkedin.png" className={"contact-image"}/></a>
                  <a href="skype:kethan.va?chat"><img src="images/icons/skype.png" className={"contact-image"}/></a>
                  <a href="https://twitter.com/kethanva"><img src="images/icons/twitter.png" className={"contact-image"}/></a>
                  <a href="tel://+919916817858"><img src="images/icons/whatsapp.png" className={"contact-image"}/></a>
              </div>
          </div>
      </section>
  );
}

export default Contact;
