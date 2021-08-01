import React, { useState } from 'react';
import { UsersType } from '.';

function findMax(users: UsersType) {
  let maxPair = null
  for (let i = 0; i < users.length; i++) {
    if (maxPair === null) {
      maxPair = users[i]
    } else if (Math.max(users[i][0], users[i][1]) > Math.max(maxPair[0], maxPair[1])) {
      maxPair = users[i]
    }
  }
  return maxPair
}

const App_ = ({ users }: { users: UsersType }) => {
  let [playerOneCounter, setPlayerOneCounter] = useState(() => {
    let pair = findMax(users)
    if (pair === null) {
      return 10
    }

    return pair[0]
  })
  let [playerTwoCounter, setPlayerTwoCounter] = useState(() => {
    let pair = findMax(users)
    if (pair === null) {
      return 10
    }

    return pair[1]
  })
  let [counters, setCounter] = useState({
    c1: 10,
    c2: 10
  })

  return (
    <div>
      <div>
        <div>Иван Иванович</div>
        <div>{playerOneCounter}</div>
        <button onClick={() => setPlayerOneCounter((actual) => actual + 1)}>+</button>
      </div>
      <hr />
      <div>
        <div>Пётр Петрович</div>
        <div>{playerTwoCounter}</div>
        <button onClick={() => setPlayerTwoCounter((actual) => actual + 1)}>+</button>
      </div>
      <hr />
      <button onClick={() => {
        setPlayerOneCounter((actual) => actual - 1)
        setPlayerTwoCounter((actual) => actual - 1)
      }
      }>-</button>
      <button onClick={() => {
        setPlayerOneCounter(10)
        setPlayerTwoCounter(10)
      }
      }>reset</button>
    </div>
  );
}

const App = ({ users }: { users: UsersType }) => {

  let [counters, setCounters] = useState(() => {
    let pair = findMax(users)
    if (pair === null) {
      return {
        c1: 10,
        c2: 10
      }
    }
    return {
      c1: pair[0],
      c2: pair[1]
    }
  }
  )

  return (
    <div>
      <div>
        <div>Иван Иванович</div>
        <div>{counters.c1}</div>
        <button onClick={() =>
          setCounters((actual) => {
            return { ...actual, c1: actual.c1 + 1 }
          })
        }>+</button>
      </div>
      <hr />
      <div>
        <div>Пётр Петрович</div>
        <div>{counters.c2}</div>
        <button onClick={() => setCounters((actual) => {
          return { ...actual, c2: actual.c2 + 1 }
        })}>+</button>
      </div>
      <hr />
      <button onClick={() => {
        setCounters((actual) => {
          return { ...actual, c1: actual.c1 - 1 }

        })
        setCounters((actual) => {
          return { ...actual, c2: actual.c2 - 1 }

        })
      }
      }>-</button>
      <button onClick={() =>
        setCounters((actual) => {
          return { c1: 10, c2: 10 }

        })
      }>reset</button>
    </div>
  );
}

export default App
