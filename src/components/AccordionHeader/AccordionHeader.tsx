import React, {FC} from "react";

type AccordionHeaderProps = {
    label: string,
    onHeaderClick: Function,
    transactionsCount: number
}

const AccordionHeader: FC<AccordionHeaderProps> = ({label, onHeaderClick, transactionsCount}) => {
    return (
        <div id="ah-root" onClick={() => onHeaderClick()}>
            {label}
            {transactionsCount}
        </div>
    )
}

export default AccordionHeader;
