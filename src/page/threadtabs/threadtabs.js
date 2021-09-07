import React from "react";
import { openthread } from "../../redux/action";
import store from "../../redux/store";
import { Tabs } from "./component/tabs";

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