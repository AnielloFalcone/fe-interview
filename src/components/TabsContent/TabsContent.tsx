import React, {FC} from "react";
import styled from "styled-components";

const TabsContentRoot = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`

const TabsContent: FC = ({children, ...props}) => {
    return (
        <TabsContentRoot
            id="tc-root"
            style={{
                display: 'flex',
                marginTop: 32,
                justifyContent: 'center'
            }}
        >
            {children}
        </TabsContentRoot>
    )
}

export default TabsContent;
