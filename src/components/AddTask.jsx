import {useState} from "react"

function AddTask({onAdd}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("Enter a task to add")
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Add task:</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => {
                    setText(e.target.value)
                }}/>
            </div>
            <div className="form-control">
                <label htmlFor="day">Add day:</label>
                <input type="date" placeholder="Add date and time" value={day} onChange={(e) => {
                    setDay(e.target.value)
                }}/>
            </div>
            <div className="form-control-check">
                <label htmlFor="reminder">Reminder:</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => {
                    setReminder(e.currentTarget.checked)
                }}/>
            </div>
            <div className="form-control">
                <button className="btn btn-block" type="submit">Save task</button>
            </div>
        </form>
    )
}

export default AddTask
