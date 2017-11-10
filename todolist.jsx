var React = require('react');

const EachTask = (props) => {
    let data;
    let newData;
    return (
        <div>
            <li id={props.id} className="list-group-item" onDoubleClick={() => { data.disabled = false }}>
                <input type="checkbox" className="mr-4" ref={node => { data = node }}/>
                <input type="text" className="w-75"
                    ref={node => { data = node }}
                    disabled={true} placeholder={props.task}
                    onKeyPress={
                        (event) => {
                            if (event.key == 'Enter') {
                                newData = {
                                    task: data.value, id: props.id
                                };
                                console.log(newData);
                                props.editTodo(newData);
                                data.value = "";
                                data.placeholder = newData.task;
                                data.disabled = true;
                            }
                        }
                    } />
                <button onClick={() => { props.removeTodo(props.id) }} className="float-right">x</button>
            </li>
        </div>
    )
}

export const TodoList = (props) => {
    const taskList = props.task.map(item => {
        return (<EachTask removeTodo={props.removeTodo} editTodo={props.editTodo} key={item.id} id={item.id} task={item.text} />)
    })
    return (
        <ul className="list-group">
            {taskList}
        </ul>
    )
}