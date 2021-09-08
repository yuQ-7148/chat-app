import { addMessage } from "../../../redux/action";

export const mergeThreadProps = (stateProps, dispatchProps) => (
    {
        ...stateProps,
        ...dispatchProps,
        onMessageSubmit: (text) => (
            dispatchProps.dispatch(
                addMessage(text, stateProps.thread.id)
            )
        )
    }
)