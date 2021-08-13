import React from 'react'
import "./_contact.scss";
import {
    Link
  } from "react-router-dom";

const Contact = () => {
    return (
        <div className="main-section">
            <div class="row no-gutters">
                <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch shadow">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                        <h3 class="mb-4">Get in touch</h3>
                        <div id="form-message-warning" class="mb-4"></div>
                            <div id="form-message-success" class="mb-4">
                            Your message was sent, thank you!
                            </div>
                            <form method="POST" id="contactForm" name="contactForm" class="contactForm" novalidate="novalidate">
                            <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                        <label class="label" for="name">Full Name</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label class="label" for="email">Email Address</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div class="form-group">
                            <label class="label" for="subject">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div class="form-group">
                        <label class="label" for="#">Message</label>
                        <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                        </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                            <input type="submit" value="Send Message" class="btn btn-primary" />
                            <div class="submitting"></div>
                        </div>
                        </div>
                        </div>
                        </form>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-5 d-flex align-items-stretch">
                            <div class="info-wrap bg-primary w-100 p-md-5 p-4">
                            <h3 class="mb-4 text-light">Let's get in touch</h3>
                            <p class="mb-4 text-light">We're open for any suggestion or just to have a chat</p>
                            <div class="dbox w-100 d-flex align-items-start">
                            <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text pl-3">
                        <p class="text-light"><span class="text-light">Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        </div>
                        <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-phone"></span>
                        </div>
                        <div class="text pl-3">
                        <p class="text-light"><span class="text-light">Phone:</span> <Link >+ 1235 2355 98</Link></p>
                        </div>
                        </div>
                        <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-paper-plane"></span>
                        </div>
                        <div class="text pl-3">
                        <p class="text-light"><span class="text-light">Email:</span> <Link href="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                        </div>
                        </div>
                        <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-globe"></span>
                        </div>
                        <div class="text pl-3">
                        <p class="text-light"><span class="text-light">Website</span> <Link href="#" class="text-light">yoursite.com</Link></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
