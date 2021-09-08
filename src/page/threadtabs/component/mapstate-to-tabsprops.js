export const mapStateToTabsProps = (state) => {
    const tabs = state.threads.map(t => ({
        title: t.title,
        id: t.id,
        active: t.id === state.activeThreadId
    }))

    return{
        tabs
    }
}