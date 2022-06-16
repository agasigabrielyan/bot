import React from "react";
import Header from './components/Header';
import Box from './components/Box';

function App(props) {
  const boxes = [
    {
      id: 1,
      title:'Наименование этого облака',
      messages: [
        {
          messageId : 55,
          messageItself: 'Пять Пять Пять Пять Пять Пять Пять Пять Пять Пять Пять '
        },
        {
          messageId : 56,
          messageItself: '<b>Второе сообщение урока</b> ' +
              'Второе сообщение урока Второе сообщение урока' +
              ' Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока ' +
              '<ul><li>adsfafd</li><li>asdfasfasd</li><li>afdas</li></ul>'
        },
        {
          messageId : 59,
          messageItself: 'Прям коротенькое сообщенице'
        },
      ],
      on: true,
      prevButton: {
        prevButtonText: 'Назад',
        prevButtonLink: 'http://google.com'
      },
      nextButton: {
        nextButtonText: 'Поехали дальше',
        nextButtonLink: 'http://yandex.ru'
      },
      nextBoxId: 2,
      show: true
    },
    {
      id: 2,
      title:'Второе облако это уже - двигаемся дальше',
      messages: [
        {
          messageId : 55,
          messageItself: 'Пять Пять Пять Пять Пять Пять Пять Пять Пять Пять Пять '
        },
        {
          messageId : 56,
          messageItself: '<b>Второе сообщение урока</b> ' +
              'Второе сообщение урока Второе сообщение урока' +
              ' Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока ' +
              '<ul><li>adsfafd</li><li>asdfasfasd</li><li>afdas</li></ul>'
        },
        {
          messageId : 59,
          messageItself: '<b>5 сообщение урока</b> Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока Второе сообщение урока '
        },
      ],
      on: true,
      prevButton: {
        prevButtonText: 'Назад',
        prevButtonLink: 'http://google.com'
      },
      nextButton: {
        nextButtonText: 'Будем делать',
        nextButtonLink: 'http://yandex.ru'
      },
      nextBoxId: 1,
      show: false
    }
  ];
  const [squares, setSquares] = React.useState(boxes);

  function toggle(nextBoxId) {
    setSquares(prevSquares => {
      const newSquares = [];

      for(let i=0; i<prevSquares.length; i++) {
        const currentSquares = prevSquares[i];
        if(currentSquares.id === nextBoxId) {
          debugger;
          const updatedSquare = {
            ...currentSquares,
            show: true
          }
          newSquares.push(updatedSquare)
        } else {
          newSquares.push(currentSquares)
        }
      }

      return newSquares;
    })
  }

  let squareToShow = [];

  if(squares) {
    for(let i=0; i<squares.length; i++) {
      if(squares[i].show) {
        squareToShow.push(squares[i]);
      }
    }
  }

  const squareElements = squareToShow.map(square => (
      <Box
          toggle={toggle}
          nextBoxId={square.nextBoxId}
          show={square.show}
          nextButtoon={square.nextButton}
          prevButton={square.prevButton}
          messages={square.messages}
          title={square.title}
          description={square.description}
          key={square.id}
          id={square.id}
          on={square.on} />
  ));



  return (
    <div className="bitrix24-learning-bot">
      <Header />
      <div className="bot">
        {squareElements}
      </div>
    </div>
  );
}

export default App
