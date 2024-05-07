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