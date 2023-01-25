import React from 'react'

// css 로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

const TodoTemplate = () => {


  // 할일 데이터
  const todos = [
    {
      id:1,
      title:'아침 산책',
      done: true
    },
    {
      id:2,
      title:'점심 산책',
      done: true
    },
    {
      id:3,
      title:'뉴스 읽기',
      done: false
    },
    {
      id:4,
      title:'잠자기',
      done: false
    },
  ]

  return (
    <div className="todo-template">
        <TodoHeader />
        <TodoMain todoList={todos} />
        <TodoInput />
    </div>
  )
}

export default TodoTemplate