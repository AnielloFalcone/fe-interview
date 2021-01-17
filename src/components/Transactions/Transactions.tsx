import React, {FC, useEffect, useState} from "react";
import {Merchant, ReduxState} from "../../shared/types";
import {connect} from "react-redux";
import Accordion from "../Accordion/Accordion";

type TransactionsProps = {
    merchants: Array<Merchant>
};

const Transactions: FC<TransactionsProps> = ({merchants}) => {
    const [transactions, setTransactions] = useState<Array<Merchant>>([]);

    useEffect(() => {
        const transactionsFromMerch = merchants.filter((m: Merchant) => !m.isBill);
        setTransactions(transactionsFromMerch);
    }, [merchants]);

    return (
        <div id="transactions-root">
            <Accordion rows={transactions}/>
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({merchants: state.merchants.data});

export default connect(mapStateToProps)(Transactions);
