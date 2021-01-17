import React, {FC, useEffect, useState} from "react";
import {Merchant, ReduxState} from "../../shared/types";
import {connect} from "react-redux";

import Accordion from "../Accordion/Accordion";

type BillsProps = {
    merchants: Array<Merchant>
};

const Bills: FC<BillsProps> = ({merchants}) => {
    const [bills, setBills] = useState<Array<Merchant>>([]);

    useEffect(() => {
        const billsFromMerch = merchants.filter((m: Merchant) => m.isBill);
        setBills(billsFromMerch);
    }, [merchants]);

    return (
        <div id="bills-root">
            <Accordion rows={bills}/>
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({merchants: state.merchants.data});

export default connect(mapStateToProps)(Bills);
