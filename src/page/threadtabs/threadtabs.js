import { connect } from "react-redux";
import { mapDispatchToTabsProps } from "./component/mapdispatch-to-tabsprops";
import { mapStateToTabsProps } from "./component/mapstate-to-tabsprops";
import { Tabs } from "./component/tabs";

const ThreadTabs = connect(
    mapStateToTabsProps,
    mapDispatchToTabsProps
)(Tabs)

export default ThreadTabs;