export default function CardHomepage(props){
    return(
        <>
            <div class="colrow border">
                <img src={props.img} alt="" />
                <h3>{props.title}</h3>
                <p id="body-14-light">{props.body}</p>
            </div>
        </>
    )
}

export function CardSearch(props){
    const {car} = props
    return(
        <>
            <div className="col">
            <div className="card h-100">
            <img src={`/src/assets/${car.image}`} style={{ objectFit: 'cover' }} width={270} height={160} className="card-img-top mt-4"/>
            <div className="card-body">
                <h5 className="card-title" id="body-16-bold">{car.manufacture} {car.model}</h5>
                <h4 id="body-24-bold">Rp {car.rent} / hari</h4>
                <p className="card-text" id="body-14-light">{car.description}</p>
                <p><img className="me-2" src="./icon/fi_users.png" alt=""/> {car.capacity}</p>
                <p><img className="me-2" src="./icon/fi_settings.png" alt=""/>{car.transmission}</p>
                <p><img className="me-2" src="./icon/fi_calendar.png" alt=""/>{car.year}</p>
            </div>
            </div>
        </div>
        </>
    )
}