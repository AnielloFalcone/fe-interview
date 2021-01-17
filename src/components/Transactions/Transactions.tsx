import React, {FC} from "react";
import {ReduxState} from "../../shared/types";
import {connect} from "react-redux";

const Transactions: FC = () => {
    return (
        <div id="transactions-root">
            Transactions
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({transactions: state.transactions.data});

export default connect(mapStateToProps)(Transactions);
