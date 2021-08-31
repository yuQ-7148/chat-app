import React from "react";
import { openthread } from "../../redux/action";
import store from "../../redux/store";

class ThreadTabs extends React.Component {
    handleClick = (id) => {
        store.dispatch(openthread(id))
    }

    render() {
        const tabs = this.props.tabs.map((tab, index) => (
            <div key={index} onClick={() => this.handleClick(tab.id)} >
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