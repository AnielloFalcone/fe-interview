import React, {FC} from "react";
import {Merchant} from "../../shared/types";

type AccordionBodyProps = {
    data: Merchant
}

const AccordionBody: FC<AccordionBodyProps> = ({data}) => {
    return (
        <div id="ab-root">
            {data.transactions.map((transaction) => (
                <div key={`transaction-${transaction.id}`}>{transaction.id}</div>
            ))}
        </div>
    )
}

export default AccordionBody;
