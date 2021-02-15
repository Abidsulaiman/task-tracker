import {useState} from "react"

function AddTask({onAdd}) {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("Enter a task to add")
            return
        }

        onAdd({text, date, reminder})

        setText('')
        setDate('')
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
                <input type="text" placeholder="Add date and time" value={date} onChange={(e) => {
                    setDate(e.target.value)
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
