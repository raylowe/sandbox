import AccordionObject from "../../accordion/accordion"

function AccordionPage() {
    
    let items = [{
        uuid:"1",
        heading:"Some Heading",
        content:<p>Here Be Some Content</p>
    }]
    
    return(
        <div>
        <h1>Accordion Test Page</h1>
            <AccordionObject 
                items={items}
            ></AccordionObject>
        </div>

    )
}
export default AccordionPage