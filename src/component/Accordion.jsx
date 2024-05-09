import { Children } from "react"

export function AccordionChild(props){
    return(
        <>
        <div class="accordion-item border rounded-1">
            <h2 class="accordion-header" id={`flush-heading${props.id}`}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id}`} aria-expanded="false" aria-controls={`flush-collapse${props.id}`}>
                <div id="body-14-light">{props.title}?</div>
                </button>
            </h2>
            <div id={`flush-collapse${props.id}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${props.id}`} data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">{props.body}</div>
            </div>
        </div>
        <br/>
        </>
    )
}

export function AccordionParent({children}){
    return(
        <>
        <div class="accordion accordion-flush" id="accordionFlushExample"> 
            {Children.map(children, child => 
                <div>
                    {child}
                </div>
            )}
        </div>
        </>
    )
}