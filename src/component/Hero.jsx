import {Link} from "react-router-dom"

export default function HeroesComponent(props) {
    let button = (
        <Link to={props.btnLink} id="btn-a">
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2" id="btn-success">
                <p id="body-14-bold">{props.btnText}</p>
            </button>
        </Link>
      );

    return(
        <>           
            <div className="container">
                <div className="row flex-lg-row align-items-center g-5 pb-1 pt-4">
                    <div className="col-lg-6 ">
                    <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                    <p id="body-14-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div>
                        {props.button ? button : null}
                    </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6" id="car-img-wrapper">
                    <img id="img_car" src={props.img}  alt="Bootstrap Themes" loading="lazy" />
                    </div>   
                </div>
            </div>
        </>
    )
}