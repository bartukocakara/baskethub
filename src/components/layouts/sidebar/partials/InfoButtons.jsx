import {
    NavLink,
  } from "react-router-dom";

const InfoButtons = () => {
    return (
        <div class="sidebar-badges">
            <div class="card-body">
                <div class="badges">
                    <NavLink to="/service-policies" target="_blank" className="sidebar-link info">
                        <span class="badge sidebar-badge">Hizmet Şartları</span>
                    </NavLink>
                    <NavLink to="/secure" target="_blank" className="sidebar-link info">
                        <span class="badge sidebar-badge">Gizlilik politikası</span>
                    </NavLink>
                    <NavLink to="/cookies" target="_blank" className="sidebar-link info">
                        <span class="badge sidebar-badge">Çerez Politikası</span>
                    </NavLink>                                
                    <NavLink to="/about-us" target="_blank" className="sidebar-link info">
                        <span class="badge sidebar-badge">Hakkımızda</span>
                    </NavLink>
                    <NavLink to="/sponsors" className="sidebar-link info">
                        <span class="badge sidebar-badge">Sponsorlar</span>
                    </NavLink>
                    <NavLink to="/contact" target="_blank" className="sidebar-link info">
                        <span class="badge sidebar-badge">İletişim</span>
                    </NavLink>
                    <NavLink to="/faq" className="sidebar-link info">
                        <span class="badge sidebar-badge">S.S.S</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default InfoButtons
