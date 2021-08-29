import React, {useState} from 'react'
import Counter from './counter'

const Counters = () => {
  const initialState = [
    {value: 0, id: 1, name: 'Ложка'},
    {value: 4, id: 2, name: 'Вилка'},
    {value: 0, id: 3, name: 'Нож'},
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId)
    setCounters(newCounters)
  }

  const handleReset = () => setCounters(initialState)

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value += 1
      }
      return counter
    })

    setCounters(newCounters)
  }

  const handleDecrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.value > 0 && counter.id === counterId) {
        counter.value -= 1
      }
      return counter
    })

    setCounters(newCounters)
  }

  return (
    <div>
      <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  )
}

export default Counters
