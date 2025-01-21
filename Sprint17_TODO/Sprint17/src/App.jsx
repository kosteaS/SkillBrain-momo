import React from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import "./App.css";
import Modal from "./components/modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "6",
    title: "Todo 6",
    description: "Terminam cursul de React",
    completed: false,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "5",
    title: "Todo 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {

  const compareTodosIdFn = (todo1, todo2) => parseInt(todo1.id) > parseInt(todo2.id) ? 1 : -1;
  const [todos, setTodos] = React.useState(TODOS_MOCK);
  const lastId = todos.sort(compareTodosIdFn).slice().pop().id;
  const nextId = React.useRef(parseInt(lastId) + 1);
  const uncompletedTodos = todos.filter(todo => !todo.completed);
  const onCreateTodoItemFn = todo =>
    <TodoItem key={todo.id} todo={todo} onDeleteTodo={()=>onDeleteTodo(todo.id)} />
    ;
  const uncompletedTodosTags = uncompletedTodos.map(onCreateTodoItemFn);
  const completedTodos = todos.filter(todo => todo.completed);
  const completedTodosTags = completedTodos.map(onCreateTodoItemFn);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const onModalClose = () => {
    setIsModalOpen(false);
  }
  const onTodoCreate = (title, description) => {
    setTodos(todos => [...todos,
    {
      id: nextId.current.toString(),
      title: title,
      description: description,
      completed: false,
    }]);
  
    nextId.current = nextId.current + 1; 
  }

  const onDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="app-container">
        <Modal isOpen={isModalOpen} onClose={onModalClose} onTodoCreate={onTodoCreate}>
        </Modal>

        
        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => setIsModalOpen(true)}>Add +</Button>
          <div className="list-container">
            {uncompletedTodosTags}
          </div>
          <div className="separator"></div>
          <h2>Completed</h2>
          <div className="list-container">
            {completedTodosTags}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
