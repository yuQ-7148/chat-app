import { MessageList } from "./message-list";
import { TextFieldSubmit } from "./text-field-submit";

export const Thread = (props) => (                                      //props = {thread, onMessageClick, onMessageSubmit}
    <div>
        <MessageList
            messages={props.thread.messages}                            //props.thread = state.threads.activethread
            onClick={props.onMessageClick}
        />
        <TextFieldSubmit
            onSubmit={props.onMessageSubmit}
        />
    </div>
)