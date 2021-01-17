import React, {FC} from "react";
import {Merchant, ReduxState} from "../../shared/types";
import {connect} from "react-redux";

import Accordion from "../Accordion/Accordion";

type BillsProps = {
    bills: Array<Merchant>
};

const Bills: FC<BillsProps> = ({bills}) => {
    return (
        <div id="bills-root">
            <Accordion rows={bills}/>
        </div>
    )
}

const mapStateToProps = (state: ReduxState) => ({bills: state.merchants.bills});

export default connect(mapStateToProps)(Bills);
