import { GoLocation } from "@react-icons/all-files/go/GoLocation";

const Header = () => {
    return (
        <div class="d-flex justify-content-between p-2">
            <h4 className="card-title text-center">Bartu Kocakara</h4>
            <p><GoLocation size={25} className="text-primary"/>İstanbul <span>/ TR</span></p>
        </div>
    )
}

export default Header
