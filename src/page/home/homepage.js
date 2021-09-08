import React from "react";
import ThreadDisplay from "../thread/thread-display";
import ThreadTabs from "../threadtabs/threadtabs"

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <ThreadTabs />
                <ThreadDisplay />
            </div>
        )
    }
}

export default HomePage;