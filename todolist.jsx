var React = require('react');

const EachTask = (props) => {
    let input;
    let check ;
    let newData;
    let oldClass;
    const toggleCheck = (check) => {
        if (!check) {
            oldClass =input.className;
            input.className = oldClass+" strikethrough";
            props.completed.push(props.id);
            return true;
        }
        else {
            input.className = oldClass;
            let index = props.completed.indexOf(props.id)
            props.completed.splice(index,1)
            return false;
        }
    }


    return (
        <div>
            <li id={props.id} className="list-group-item">
                <input type="checkbox" className="mr-4 strikethrough" onClick={() => { check=toggleCheck(check); }} />
                <span onDoubleClick={() => {
                    input.disabled = false,
                        input.value = input.placeholder,
                        input.placeholder = ""
                        console.log(props.completed);
                }
                }>
                    <input type="text" className="w-75"
                        ref={node => { input = node }}
                        disabled={true} placeholder={props.task}
                        onKeyPress={
                            (event) => {
                                if (event.key == 'Enter') {
                                    if (input.value) {
                                        newData = {
                                            task: input.value, id: props.id
                                        };
                                        props.editTodo(newData);
                                        input.value = "";
                                        input.placeholder = newData.task;
                                        input.disabled = true;
                                    }
                                }
                            }
                        } />
                </span>
                <button onClick={() => { props.removeTodo([props.id]) }} className="float-right">x</button>
            </li>
        </div>
    )
}

export const TodoList = (props) => {
    const taskList = props.task.map(item => {
        return (<EachTask removeTodo={props.removeTodo} completed={props.completed} editTodo={props.editTodo} key={item.id} id={item.id} task={item.text} />)
    })
    return (
        <ul className="list-group">
            {taskList}
        </ul>
    )
}