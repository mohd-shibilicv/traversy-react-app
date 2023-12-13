import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            toast.error('Please add a task');
            return;
        }
        if (!day) {
            toast.error('Please add a date');
            return;
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="flex max-w-md w-full flex-col gap-4 my-3 add-form" onSubmit={onSubmit}>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="task" value="Task" />
            </div>
            <TextInput id="task" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="eg. Buy Groceries" />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="day-time" value="Day & Time" />
            </div>
            <TextInput id="day-time" type="date" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" checked={reminder} className='focus:ring-gray-500 dark:ring-offset-gray-500 dark:focus:ring-gray-500 text-gray-500' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            <Label htmlFor="remember">Set Reminder</Label>
        </div> */}
        <Button type="submit" className='bg-gray-500 hover:bg-gray-600'>Add Task</Button>
        </form>
    )
}

export default AddTask
