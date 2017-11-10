var React = require('react');


export const TodoInsert = ({ addTodo }) => {
    let data;
    return (
        <div className="row mb-5">
            <input ref={node => { data = node }} type="text" className="text-center form-control col-md-10" onKeyPress={(event) => {if (event.key == 'Enter') {addTodo(data.value); data.value = "";}}} />
            <button onClick={() => { addTodo(data.value); data.value = "" }} className="ml-2 col-md-1">+</button>
        </div>
    )
}
