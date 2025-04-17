import React from 'react'

export default function Button({text, className, onClick, type="button"}) {
  return (
    <button onClick={onClick} type={type} className={`inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-base leading-tight uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${className}`}>{text}</button>
  )
}
