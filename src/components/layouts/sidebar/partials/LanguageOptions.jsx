import {
    Link,
  } from "react-router-dom";
const LanguageOptions = () => {
    return (
        <div class="lang-menu">
            <div class="selected-lang">
                TR
            </div>
            <ul>
                <li>
                    <Link class="en">EN</Link>
                </li>
                <li>
                    <Link class="de">DE</Link>
                </li>
                <li>
                    <Link class="es">ES</Link>
                </li>
                <li>
                    <Link class="fr">FR</Link>
                </li>
                <li>
                    <Link class="ar">AR</Link>
                </li>
            </ul>
        </div>
    )
}

export default LanguageOptions
