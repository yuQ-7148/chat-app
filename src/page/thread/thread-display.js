import { mapDispatchToThreadProps } from "./component/mapdispatch-to-threadprops";
import { mapStateToThreadProps } from "./component/mapstate-to-threadprops";
import { mergeThreadProps } from "./component/merge-threadprops";
import { Thread } from "./component/thread";
import { connect } from "react-redux";

const ThreadDisplay = connect(
  mapStateToThreadProps,
  mapDispatchToThreadProps,
  mergeThreadProps
)(Thread)

export default ThreadDisplay;