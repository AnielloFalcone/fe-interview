import React, {FC, useState} from "react";
import {Merchant} from "../../shared/types";
import AccordionHeader from "../AccordionHeader/AccordionHeader";
import AccordionBody from "../AccordionBody/AccordionBody";

type AccordionRowProps = {
    //This should be any type needed but since in this case it only works with Merchants I'll use it for precision
    data: Merchant
}

const AccordionRow: FC<AccordionRowProps> = ({data}) => {
    const [showBody, setShowBody] = useState<boolean>(false);

    const handleHeaderClick = () => setShowBody(!showBody);

    return (
        <div id="ar-root">
            <AccordionHeader
                label={data.name}
                onHeaderClick={handleHeaderClick}
                transactionsCount={data.transactions.length}
            />
            {showBody && <AccordionBody {...{data}} />}
        </div>
    )
}

export default AccordionRow;
