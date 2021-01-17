import React, {FC} from "react";
import styled from 'styled-components';
import {StyleConstants} from '../../shared/constants';

//Types
import {TabType} from "../../shared/types";

export type TabProps = {
    selected: boolean
};

export type TabsHeaderProps = {
    activeTab: TabType,
    setActiveTab: Function,
    tabs: Array<TabType>
};

const Tab = styled.div`
    align-items: center;
    background-color: ${(props: TabProps) => props.selected ? StyleConstants.colors.darkGrey : StyleConstants.colors.yellow};
    color: ${(props: TabProps) => props.selected ? 'white' : StyleConstants.colors.darkGrey};
    display: flex;
    font-weight: 600;
    height: 50px;
    justify-content: center;
    text-align: center;
    width: 150px;
`;

const TabHeaderRoot = styled.div`
    align-items: flex-end;
    background-color: ${StyleConstants.colors.yellow};
    display: flex;
    height: 80px;
    justify-content: center;
    width: 100%;
`

const TabsHeader: FC<TabsHeaderProps> = ({activeTab, setActiveTab, tabs}) => {
    return (
        <TabHeaderRoot id="th-root">
            {tabs.map((tab, idx) => (
                <Tab
                    selected={activeTab.label === tab.label}
                    key={`${tab.label}-${idx}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab.label}
                </Tab>
            ))}
        </TabHeaderRoot>
    )
}

export default TabsHeader;
