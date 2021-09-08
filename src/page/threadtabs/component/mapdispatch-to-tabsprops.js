import { openthread } from "../../../redux/action";

export const mapDispatchToTabsProps = (dispatch) => (
    {
        onClick: (id) => (
            dispatch(openthread(id))
        )
    }
)