import React, {FC, useState} from "react";

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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
