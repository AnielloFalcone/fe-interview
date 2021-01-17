import React, {FC} from "react";
import {Merchant} from "../../shared/types";
import AccordionRow from "../AccordionRow/AccordionRow";
import styled from "styled-components";
import {StyleConstants} from "../../shared/constants";

type AccordionProps = {
    //This should be Array<any type needed>
    // but since in this case it only works with Merchants I'll use it for precision
    rows: Array<Merchant>
}

type AccordionRootProps = {
    noData: boolean
}

const AccordionRoot = styled.div`
    width: 600px;
    border: ${(props: AccordionRootProps) => props.noData ? 'none' : `1px solid ${StyleConstants.colors.yellow}`};
`;

const NoData = styled.div`
    color: ${StyleConstants.colors.yellow};
`;

const Accordion: FC<AccordionProps> = ({rows}) => {
    return (
        <AccordionRoot id="accordion-root" noData={rows.length === 0}>
            {rows.length > 0 && rows.map((row) => (
                <AccordionRow data={row} key={`merchant-${row.id}`}/>
            ))}
            {rows.length === 0 && (
                <NoData>No transaction to show...</NoData>
            )}
        </AccordionRoot>
    )
}

export default Accordion;
