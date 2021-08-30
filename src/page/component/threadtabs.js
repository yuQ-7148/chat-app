import React from "react";

class ThreadTabs extends React.Component {
    render() {
        const tabs = this.props.tabs.map((tab, index) => (
            <div key={index} >
                {tab.title}
            </div>
        ))

        return(
            <div>
                {tabs}
            </div>
        )
    }
}

export default ThreadTabs;