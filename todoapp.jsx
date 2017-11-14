var React = require('react');
var axios = require('axios');
var URL = "http://localhost:4000";

import { Title } from './title.jsx';
import { TodoInsert } from './todoinsert.jsx';
import { TodoList } from './todolist.jsx';
import { TodoInstruction } from './todoinstruction.jsx';


export class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            text: [],
            id: 0,
            completed: []
        }
    }

    componentDidMount() {
        console.log('mounted')
        var that = this;
        axios.get(URL + '/api/viewlist')
            .then(function (response) {
                response.data.forEach(item => {
                    let task = {
                        text: item.task,
                        id: item._id
                    }
                    that.state.text.push(task);
                    that.setState({ text: that.state.text })
                })

            });
    }

    addTodo(text) {
        var that = this;
        axios.post(URL + '/api/viewlist', { username: 'user', task: text })
            .then(function (response) {
                let item = response.data;
                let task = {
                    text: item.task,
                    id: item._id
                };
                that.state.text.push(task);
                that.setState({ text: that.state.text })
            });

    }

    removeTodo(idArray) {
        var that = this;
        idArray.forEach((id) => {
            axios.delete(URL + '/api/viewlist/' + id, { data: { _id: id } })
                .then(function (response) {
                    let newArray = that.state.text.filter(item => {
                        if (item.id !== id)
                            return item
                    })
                    that.setState({ text: newArray })
                });
        })
    }

    editTodo(data) {
        var that = this;
        var newItem = data.task;
        console.log(newItem)
        axios.put(URL + '/api/viewlist/' + data.id, { task: newItem })
            .then(function (response) {
                let newArray = that.state.text.filter(item => {
                    if (item.id == data.id)
                        return newItem;
                    else
                        return item
                })
                that.setState({ text: newArray })
            });

    }

    render() {
        console.log('renderd!')
        return (
            <div>
                <Title />
                <TodoInsert addTodo={this.addTodo.bind(this)} />
                <TodoList task={this.state.text} completed={this.state.completed} removeTodo={this.removeTodo.bind(this)} editTodo={this.editTodo.bind(this)} />
                <TodoInstruction completed={this.state.completed} removeTodo={this.removeTodo.bind(this)} />
            </div>
        )
    }
}