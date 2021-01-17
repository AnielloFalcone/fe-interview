import React, {FC} from "react";

const TabsContent: FC = ({children, ...props}) => {
    return (
        <div id="tc-root">
            {children}
        </div>
    )
}

export default TabsContent;
