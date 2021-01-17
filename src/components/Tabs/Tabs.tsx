import React, {FC, useState} from "react";

// Components
import TabsContent from "../TabsContent/TabsContent";
import TabsHeader from "../TabsHeader/TabsHeader";

// Types
import {TabType} from "../../shared/types";

type TabsProps = {
    tabs: Array<TabType>
}

const Tabs: FC<TabsProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = useState<TabType>(tabs[0]);

    return (
        <div id="tabs-root">
            <TabsHeader {...{tabs}} {...{activeTab}} {...{setActiveTab}} />
            <TabsContent>{activeTab.component}</TabsContent>
        </div>
    )
}

export default Tabs;
