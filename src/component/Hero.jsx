export default function HeroesComponent(props) {
    let button = null
    if(props.button == true) button = <button type="button" class="btn btn-success btn-lg px-4 me-md-2" id="btn-success"><a id="btn-a" href="search.html"><p id="body-14-bold">Mulai Sewa Mobil</p></a></button>

    return(
        <>           
            <div class="container">
                <div class="row flex-lg-row align-items-center g-5 pb-1 pt-4">
                    <div class="col-lg-6 ">
                    <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                    <p id="body-14-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div>
                        {button}
                    </div>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6" id="car-img-wrapper">
                    <img id="img_car" src={props.img}  alt="Bootstrap Themes" loading="lazy" />
                    </div>   
                </div>
            </div>
        </>
    )
}