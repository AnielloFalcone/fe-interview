import React, {FC} from "react";
import {Merchant} from "../../shared/types";
import styled from "styled-components";

type AccordionBodyProps = {
    data: Merchant,
    isVisible: boolean
}

type BodyRootProps = {
    isVisible: boolean
}

const AccordionBodyRoot = styled.div`
    margin: ${((props: BodyRootProps) => props.isVisible ? '16px' : 0)};
    max-height: ${((props: BodyRootProps) => props.isVisible ? '200px' : 0)};
    overflow: hidden;
    transition: all 0.25s ease-out;
    width: 100%;
`;

const Transaction = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    height: 30px;
    max-height: 500px;
    transition: all 0.35s ease-in;
`

const AccordionBody: FC<AccordionBodyProps> = ({data, isVisible}) => {
    return (
        <AccordionBodyRoot id="ab-root" isVisible={isVisible}>
            {data.transactions.map((transaction) => (
                <Transaction key={`transaction-${transaction.id}`}>
                    <div>{transaction.date}</div>
                    <div>{transaction.amount} €</div>
                </Transaction>
            ))}
        </AccordionBodyRoot>
    )
}

export default AccordionBody;
