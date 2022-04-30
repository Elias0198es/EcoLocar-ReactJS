import React from 'react'

const Button = ({ Text, onClick, type = "button" }) => {
  return (
    <div>
        <button
            type={type}
            onClick={onClick}
        >
         {Text}
        </button>
    </div>
  )
}

export default Button