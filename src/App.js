import React from "react";
import "./styles/global.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaTimes } from 'react-icons/fa'


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}><FaCheck /></Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}><FaTimes /></Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Write your task" />
    </Form.Group>
    <Button variant="danger mb-3" type="submit" size="lg" block>
      Add
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Lavar el auto",
      isDone: true
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container col-md-6">
        <h1 className="text-center mb-4">To Do List React</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}                
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default App;