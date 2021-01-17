import React, {FC, useState} from "react";
import {StyleConstants} from "../../shared/constants";

// Components
import TabsContent from "../TabsContent/TabsContent";
import TabsHeader from "../TabsHeader/TabsHeader";

// Types
import {TabType} from "../../shared/types";
import styled from "styled-components";

type TabsProps = {
    tabs: Array<TabType>
}

const TabsRoot = styled.div`
    align-items: center;
    background: ${StyleConstants.colors.darkGrey};
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: start;
`

const Tabs: FC<TabsProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = useState<TabType>(tabs[0]);

    return (
        <TabsRoot id="tabs-root">
            <TabsHeader {...{tabs}} {...{activeTab}} {...{setActiveTab}} />
            <TabsContent>{activeTab.component}</TabsContent>
        </TabsRoot>
    )
}

export default Tabs;
