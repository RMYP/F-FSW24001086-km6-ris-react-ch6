import { Children } from "react"

export function CarouselParent({children}){
    return(
        <>
         <div id="carousel-section" className="mx-auto">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {Children.map(children, (child, index) => 
                        <div className={`carousel-item ${index == 0 ? 'active' : ""}`}>
                            {child}
                        </div>  
                    )}
                </div>  
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>
        </>
    )
}

export function CarouselChild(props){
    return(
        <>
            <div className="row featurette">
                <div className="col-md-4 order-md-1" id="img-carousel">
                    <img src={props.img} alt=""/>
                </div>
                <div className="col-md-8 order-md-2">
                    <div id="testi-carousel">
                        <img id="star-testimoni-carousel" src="assets/icon/Rate.svg" className="mb-3" alt=""/>
                        <p id="body-14-light" className="">“{props.body}”</p>
                        <p id="body-14-regular">{props.name}  </p>
                    </div>  
                </div>
            </div>
        </>
    )
}