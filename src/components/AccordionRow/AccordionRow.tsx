import React, {FC, useState} from "react";
import {Merchant} from "../../shared/types";
import AccordionHeader from "../AccordionHeader/AccordionHeader";
import AccordionBody from "../AccordionBody/AccordionBody";
import styled from "styled-components";

type AccordionRowProps = {
    //This should be any type needed but since in this case it only works with Merchants I'll use it for precision
    data: Merchant
}

const AccordionRowRoot = styled.div`
    align-items: center;
    border-bottom: 1px solid lightgrey;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80px;
    margin: 0 16px;
`

const AccordionRow: FC<AccordionRowProps> = ({data}) => {
    const [showBody, setShowBody] = useState<boolean>(false);

    const handleHeaderClick = () => setShowBody(!showBody);

    return (
        <AccordionRowRoot id="ar-root">
            <AccordionHeader
                label={data.name}
                onHeaderClick={handleHeaderClick}
                transactionsCount={data.transactions.length}
            />
            <AccordionBody {...{data}} isVisible={showBody}/>
        </AccordionRowRoot>
    )
}

export default AccordionRow;
