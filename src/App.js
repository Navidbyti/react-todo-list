import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./app.module.css";

function App() {
  const [todoItem, setTodoItem] = useState({
    text: "",
    id: 0,
    isComplete: false,
  });

  const [inputArr, setInputArr] = useState([]);

  const clearInput = () => {
    console.log(todoItem);
    setInputArr([...inputArr, todoItem]);
    setTodoItem({ ...todoItem, id: todoItem.id + 1, text: "" });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setTodoItem((prev) => {
      return { ...prev, text: value };
    });
  };

  const removeTodo = (id) => {
    const filterd = inputArr.filter((item) => {
      console.log(id);
      return item.id !== id;
    });
    setInputArr(filterd);
    console.log(inputArr);
  };

  return (
    <div className={styles.mainContainer}>
      <p>Enter a todo item:</p>

      <div className={styles.submitContainer}>
        <form>
          <input
            name="input"
            className={styles.mainInput}
            type="text"
            value={todoItem.text}
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className={styles.submitBtn}
            onClick={(e) => {
              e.preventDefault();
              clearInput();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      {inputArr.map((item) => {
        return <TodoItem removeTodo={removeTodo} key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;
