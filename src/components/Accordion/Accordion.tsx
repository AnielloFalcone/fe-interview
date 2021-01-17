import React, {FC} from "react";
import {Merchant} from "../../shared/types";
import AccordionRow from "../AccordionRow/AccordionRow";

type AccordionProps = {
    //This should be Array<any type needed>
    // but since in this case it only works with Merchants I'll use it for precision
    rows: Array<Merchant>
}

const Accordion: FC<AccordionProps> = ({rows}) => {
    return (
        <div id="accordion-root">
            {rows.map((row) => (
                <AccordionRow data={row} key={`merchant-${row.id}`}/>
            ))}
        </div>
    )
}

export default Accordion;
