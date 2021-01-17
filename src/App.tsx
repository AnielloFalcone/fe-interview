import React, {FC, useEffect, useState} from 'react';

import {connect} from "react-redux";
import {fetchMerchants} from "./redux/merchants";

import Tabs from "./components/Tabs/Tabs";
import Bills from "./components/Bills/Bills";
import Transactions from "./components/Transactions/Transactions";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
import {ReduxState} from "./shared/types";

type AppProps = {
    fetchMerchants: Function,
    loading: boolean
}

const App: FC<AppProps> = ({fetchMerchants, loading}) => {
    // Here it is possible to configure how many tabs to show and which component is linked to each tab
    const tabs = [
        {label: 'Bills', component: <Bills/>},
        {label: 'Transactions', component: <Transactions/>}
    ]
    const [showContent, setShowContent] = useState<boolean>(false);

    useEffect(() => {
        // this timeout is needed only because the startup time is very short therefore displaying the loading
        // within that amount of time was pointless, now it looks like it is loading something for real (simulating auth)
        setTimeout(() => setShowContent(true), 700);
        fetchMerchants();
    }, [fetchMerchants])

    return (
        <LoadingOverlay showLoading={loading || !showContent}>
            <Tabs {...{tabs}}/>
        </LoadingOverlay>
    );
};

// Redux
const mapStateToProps = (state: ReduxState) => ({
    loading: state.merchants.loading
})
const mapDispatchToProps = {fetchMerchants};

export default connect(mapStateToProps, mapDispatchToProps)(App);
