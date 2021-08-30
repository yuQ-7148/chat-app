import React from "react";
import store from "../../redux/store";
import Thread from "../component/thread";
import ThreadTabs from "../component/threadtabs"

class HomePage extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    render() {
        const state = store.getState()
        console.log('state:', state)
        const activeThreadId = state.activeThreadId
        const threads = state.threads
        const activeThread = threads.find((t) => t.id === activeThreadId)

        const tabs = threads.map(t => ({
            title: t.title,
            active: t.id === activeThreadId
        }))

        return (
            <div>
                <ThreadTabs tabs={tabs} />
                <Thread thread={activeThread} />
            </div>
        )
    }
}

export default HomePage;