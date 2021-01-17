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
    background-color: ${(props: TabProps) => props.selected ? StyleConstants.colors.blue : 'white'};
    color: ${(props: TabProps) => props.selected ? 'white' : StyleConstants.colors.blue};
    display: flex;
    height: 50px;
    justify-content: center;
    text-align: center;
    width: 150px;
`;

const TabsHeader: FC<TabsHeaderProps> = ({activeTab, setActiveTab, tabs}) => {
    return (
        <div id="th-root" style={{display: 'flex'}}>
            {tabs.map((tab, idx) => (
                <Tab
                    selected={activeTab.label === tab.label}
                    key={`${tab.label}-${idx}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab.label}
                </Tab>
            ))}
        </div>
    )
}

export default TabsHeader;
