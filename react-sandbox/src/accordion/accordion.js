import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


function AccordionObject({ items }) {

    return (
        <Accordion allowZeroExpanded>
            {items.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default AccordionObject


