import { Link } from "react-router-dom"

export default function ButtonBody14(props) {
    return(
        <Link to={props.btnLink} id="btn-a">
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2" id="btn-success">
                <p id="body-14-bold">{props.btnText}</p>
            </button>
        </Link>
    )
}