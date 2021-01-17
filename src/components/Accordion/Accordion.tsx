import React, {FC} from "react";
import {Merchant} from "../../shared/types";
import AccordionRow from "../AccordionRow/AccordionRow";
import styled from "styled-components";

type AccordionProps = {
    //This should be Array<any type needed>
    // but since in this case it only works with Merchants I'll use it for precision
    rows: Array<Merchant>
}

const AccordionRoot = styled.div`
    width: 600px;
    box-shadow: 1px 1px 5px darkgrey;
`

const Accordion: FC<AccordionProps> = ({rows}) => {
    return (
        <AccordionRoot id="accordion-root">
            {rows.map((row) => (
                <AccordionRow data={row} key={`merchant-${row.id}`}/>
            ))}
        </AccordionRoot>
    )
}

export default Accordion;
