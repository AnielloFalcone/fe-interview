import React, {FC, useEffect} from 'react';

import {connect} from "react-redux";
import {fetchMerchants} from "./redux/merchants";

import Tabs from "./components/Tabs/Tabs";
import Bills from "./components/Bills/Bills";
import Transactions from "./components/Transactions/Transactions";

type AppProps = {
    fetchMerchants: Function
}

const App: FC<AppProps> = ({fetchMerchants}) => {
    const tabs = [
        {label: 'Bills', component: <Bills/>},
        {label: 'Transactions', component: <Transactions/>}
    ]

    useEffect(() => fetchMerchants(), [fetchMerchants])

    return (
        // <img src={welcomeIcon} alt="Welcome!"/>
        <Tabs {...{tabs}}/>
    );
};

// Redux
const mapDispatchToProps = {fetchMerchants};

export default connect(null, mapDispatchToProps)(App);
