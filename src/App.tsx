import React, {FC, useEffect} from 'react';

import {connect} from "react-redux";
import {fetchTransactions} from "./redux/transactions";

import Tabs from "./components/Tabs/Tabs";
import Bills from "./components/Bills/Bills";
import Transactions from "./components/Transactions/Transactions";

import {ReduxState} from "./shared/types";

type AppProps = {
    fetchTransactions: Function,
    transactions: Array<any>
}

const App: FC<AppProps> = ({fetchTransactions, transactions}) => {
    const tabs = [
        {label: 'Bills', component: <Bills/>},
        {label: 'Transactions', component: <Transactions/>}
    ]

    useEffect(() => fetchTransactions(), [])
    return (
        // <img src={welcomeIcon} alt="Welcome!"/>
        <Tabs {...{tabs}}/>
    );
};

// Redux
const mapDispatchToProps = {fetchTransactions};

export default connect(null, mapDispatchToProps)(App);
