export const MessageList = (props) => (                                                     //props = {messages, onClick}
    <div>
        {
            props.messages.map((m, index) => (                                              //简洁 m = message
                <div key={index} onClick={() => props.onClick(m.id)} >
                    <div>
                        {m.text}
                        <span>@{m.timestamp}</span>
                    </div>
                </div>
            ))
        }
    </div>
)