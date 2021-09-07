import React from "react";
import { openthread } from "../../redux/action";
import store from "../../redux/store";

const Tabs = (props) => (
    <div>
        {
            props.tabs.map((tab, index) => (
                <div key={index} onClick={() => props.onClick(tab.id)} >
                    {tab.title}
                </div>
            ))
        }
    </div>
)

class ThreadTabs extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate);
    }

    render() {
        const state = store.getState();
        const tabs = state.threads.map((t) => ({
            title: t.title,
            id: t.id,
            active: t.id === state.activeThreadId
        }))

        return (
            <Tabs tabs={tabs} onClick={(id) => (store.dispatch(openthread(id)))} />
        )
    }
}

export default ThreadTabs;