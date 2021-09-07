export const Tabs = (props) => (
    <div>
        {
            props.tabs.map((tab, index) => (
                <div key={index} onClick={() => props.onClick(tab.id)} >
                    {tab.title}
                </div>
            ))
        }
    </div>
)