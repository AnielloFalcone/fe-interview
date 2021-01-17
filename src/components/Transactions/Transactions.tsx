import React, {FC, useEffect, useState} from "react";
import {Merchant, ReduxState} from "../../shared/types";
import {connect} from "react-redux";
import Accordion from "../Accordion/Accordion";

type TransactionsProps = {
    transactions: Array<Merchant>
};

const Transactions: FC<TransactionsProps> = ({transactions}) => {
    return (
        <div id="transactions-root">
            <Accordion rows={transactions}/>
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({transactions: state.merchants.transactions});

export default connect(mapStateToProps)(Transactions);
