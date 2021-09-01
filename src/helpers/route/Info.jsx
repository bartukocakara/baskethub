import ServicePolicies from './../components/info/service-policies/ServicePolicies';
import About from './../components/info/about/About';
import Secure from './../components/info/secure/Secure';
import Contact from './../components/info/contact/Contact';
import Cookies from './../components/info/cookies/Cookies';
import Faq from './../components/info/faq/Faq';
const Info = () => {
    return (
        <>
            <Route path="/service-policies" component={ServicePolicies} />
            <Route path="/about-us" component={About} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/secure" component={Secure} />
            <Route path="/contact" component={Contact} />
            <Route path="/cookies" component={Cookies} />
            <Route path="/faq" component={Faq} />  
        </>
    )
}

export default Info
