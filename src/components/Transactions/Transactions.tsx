import React, {FC, useEffect, useState} from "react";
import {Merchant, ReduxState} from "../../shared/types";
import {connect} from "react-redux";

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
            {transactions.length > 0 && transactions.map((transaction) => (
                <div>{transaction.name}</div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({merchants: state.merchants.data});

export default connect(mapStateToProps)(Transactions);
