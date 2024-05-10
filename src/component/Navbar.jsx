import ListBody14Light from "./List"
export default function NavbarComponent() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light pt-3">
            <div className="container">
            <img src="icon/Rectangle 74.svg" alt=""/>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <p id="body-24-bold" className="fw-bold">BCR</p>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                    <ul>
                    <li>
                        <a href="#our-service" id="body-14-regular">Our Services</a>
                    </li>
                    <li>
                        <a href="#why-us" id="body-14-regular">Why Us</a>
                    </li>
                    <li>
                        <a href="#testimonial-section" id="body-14-regular">Testimonial</a>
                    </li>
                    <li>
                        <a href="#FAQ" id="body-14-regular">FAQ</a>
                    </li>
                    <li>
                        <a className="btn btn-success" id="body-14-bold" href="/login">Register</a>
                    </li>
                    </ul>
                </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#our-service" id="body-14-regular">Our Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#why-us" id="body-14-regular">Why Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testimonial-section" id="body-14-regular">Testimonial</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#FAQ" id="body-14-regular">FAQ</a>
                </li>
                <li>
                    <a className="btn btn-success" id="body-14-bold" href="">Register</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}