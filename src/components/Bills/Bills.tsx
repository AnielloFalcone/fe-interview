import React, {FC, useEffect, useState} from "react";
import {Merchant, ReduxState} from "../../shared/types";
import {connect} from "react-redux";

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
            {bills.length > 0 && bills.map((bill) => (
                <div>{bill.name}</div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({merchants: state.merchants.data});

export default connect(mapStateToProps)(Bills);
