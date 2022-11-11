import React from 'react'

export function Contact(props){
    return(
        <section className="contact">
            <h2 className="contact__heading">
                Contact
            </h2>

            <div className="contact__content">
                <div className="contact__mail-wrapper">
                    <h3>MAIL</h3>
                    <a href="https://busayojoseph123@gmail.com" target="_blank" rel="noreferrer">busayojoseph123@gmail.com</a>
                </div>

                <div className="contact__social-wrapper">
                    <h3>SOCIALS</h3>
                    <div className="contact__social">
                        <a href="https://twitter.com/josephbusayo9" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="https://linkedin.com/in/josephbusayo" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="busayojoseph123@gmail.com" target="_blank" rel="noreferrer">busayojoseph123@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
