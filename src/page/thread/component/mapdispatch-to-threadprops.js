import { deleteMessage } from "../../../redux/action";

export const mapDispatchToThreadProps = (dispatch) => (
    {
        onMessageClick: (id) => (
            dispatch(deleteMessage(id))
        ),
        dispatch: dispatch
    }
)