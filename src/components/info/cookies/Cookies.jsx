import React from 'react'
import "./_cookies.scss";
import {
    Link
  } from "react-router-dom";
const Cookies = () => {
    return (
        <>
            <div class="wrapper">
                <img src="#" alt="" />
                <div class="content">
                    <header>Cookies Consent</header>
                    <p>This website use cookies to ensure you get the best experience on our website.</p>
                    <div class="buttons">
                        <button class="item">I understand</button>
                        <Link href="#" class="item">Learn more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cookies
