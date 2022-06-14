import React, {useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Box from './Box'

function App(props) {
  const boxes = [
    {
      id: 1,
      title:'Наименование этого облака',
      description: 'Описание, что нужно сделать по задаче тут находится',
      on: true
    },
    {
      id: 2,
      title:'Наименование этого облака',
      description: 'Привет, этот бот поможет тебе изучить bitrix24 выполняя задачи на практике, по окончании курса ты будешь знать о битрикс24 все, что начать эффективано работать с bitrix24.',
      on: false
    },
    {
      id: 3,
      title:'Наименование этого облака',
      description: 'Описание, что нужно сделать по задаче тут находится',
      on: true
    },
    {
      id: 4,
      title:'Наименование этого облака',
      description: 'Описание, что нужно сделать по задаче тут находится',
      on: true
    },
    {
      id: 5,
      title:'Наименование этого облака',
      description: 'Описание, что нужно сделать по задаче тут находится',
      on: false
    },
    {
      id: 6,
      title:'Наименование этого облака',
      description: 'Описание, что нужно сделать по задаче тут находится',
      on: false
    },
  ];
  const [squares, setSquares] = React.useState(boxes);



  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square => (
      <Box
          toggle={toggle}
          title={square.title}
          description={square.description}
          key={square.id}
          id={square.id}
          on={square.on} />
  ));

  return (
    <div className="bitrix24-learning-bot">
      <div className="bot">
        <Header />
        {squareElements}
      </div>
    </div>
  );
}

export default App
