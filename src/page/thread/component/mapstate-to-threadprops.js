export const mapStateToThreadProps = (state) => (
    {
        thread: state.threads.find(t => t.id === state.activeThreadId)
    }
)