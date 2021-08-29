import React from 'react'

const Counter = (props) => {
  const x = 'Ноль'

  const formValue = () => (props.value === 0 ? x : props.value)

  return (
    <div>
      <h4>{props.name}</h4>
      <h1 className={`badge ${props.value ? 'bg-primary' : 'bg-danger'} m-2`}>
        {formValue()}
      </h1>
      <button
        onClick={() => props.onIncrement(props.id)}
        className='btn btn-secondary btn-sm m-2'
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
      <button
        className='btn btn-danger btn-sm m-2'
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Counter
