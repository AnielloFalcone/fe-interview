import React, {FC} from "react";
import {ReduxState} from "../../shared/types";
import {connect} from "react-redux";

const Bills: FC = () => {
    return (
        <div id="bills-root">
            Bills
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({transactions: state.transactions.data});

export default connect(mapStateToProps)(Bills);
