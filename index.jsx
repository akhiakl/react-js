const Title = () => {
    return (
        <div>
            <h3 className = "text-center">ToDo App</h3>
        </div>
    )
}

const TodoInsert = ({addTodo}) => {
    let data;
    return (
        <div className="row">
            <input ref = {node => {data=node}} type = "text" className = "text-center form-control col-md-10"/>
            <button onClick={()=> {addTodo(data.value)}} className="ml-2 col-md-1 btn btn-info">+</button> 
        </div>
    )
}

const TodoList = () => {     
    <ul>
        <eachTask />
    </ul>
}


class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            text :[],
            id :0
        }
    }
    addTodo(text){
        let task = {
            text,
            id : this.state.id++
        }
        this.state.text.push(task);
        console.log(this.state.text);

    }
    render() {
        return (
            <div>
                <Title />
                <TodoInsert addTodo={this.addTodo.bind(this)}/>
                {/* <TodoList /> */}
            </div>
        )
    }
}

ReactDOM.render(
    <TodoApp />
    , document.getElementById('root')
)