import React from 'react'
const Bg_Banner = () => {
  const shapes = [
    { className: 'absolute top-10 left-10 w-14 h-14 bg-red-500 rounded-full' },
    { className: 'absolute top-20 left-40 w-16 h-16 bg-orange-400 rounded-lg' },
    {
      className: 'absolute top-40 left-20 w-12 h-12 bg-yellow-400 rounded-full',
    },
    { className: 'absolute top-60 left-60 w-20 h-10 bg-lime-400 rounded-md' },
    { className: 'absolute top-80 left-32 w-10 h-20 bg-cyan-400 rounded-lg' },
    { className: 'absolute top-96 left-80 w-16 h-8 bg-pink-500 rounded-full' },
    { className: 'absolute top-5 right-20 w-14 h-14 bg-purple-500 rounded-lg' },
    { className: 'absolute top-28 right-40 w-12 h-16 bg-red-400 rounded-full' },
    {
      className: 'absolute top-48 right-60 w-20 h-10 bg-orange-500 rounded-md',
    },
    {
      className: 'absolute top-72 right-80 w-10 h-20 bg-yellow-300 rounded-lg',
    },
    {
      className: 'absolute top-96 right-10 w-14 h-14 bg-green-400 rounded-full',
    },
    { className: 'absolute top-16 left-1/4 w-12 h-12 bg-blue-400 rounded-md' },
    { className: 'absolute top-1/3 left-1/2 w-10 h-20 bg-pink-400 rounded-lg' },
    {
      className:
        'absolute top-1/2 left-1/4 w-20 h-10 bg-purple-400 rounded-full',
    },
    { className: 'absolute top-3/4 left-1/3 w-14 h-14 bg-red-500 rounded-lg' },
    {
      className:
        'absolute bottom-10 left-10 w-12 h-12 bg-orange-300 rounded-md',
    },
    {
      className:
        'absolute bottom-20 left-40 w-16 h-8 bg-yellow-500 rounded-full',
    },
    {
      className: 'absolute bottom-40 left-20 w-14 h-14 bg-green-300 rounded-lg',
    },
    {
      className: 'absolute bottom-60 left-60 w-12 h-20 bg-blue-500 rounded-md',
    },
    {
      className:
        'absolute bottom-80 left-32 w-10 h-10 bg-pink-500 rounded-full',
    },
    { className: 'absolute bottom-96 left-80 w-14 h-14 bg-red-400 rounded-lg' },
    {
      className:
        'absolute bottom-16 right-20 w-12 h-12 bg-purple-500 rounded-md',
    },
    {
      className:
        'absolute bottom-28 right-40 w-20 h-8 bg-orange-400 rounded-full',
    },
    {
      className:
        'absolute bottom-48 right-60 w-14 h-14 bg-yellow-300 rounded-lg',
    },
    {
      className:
        'absolute bottom-72 right-80 w-16 h-16 bg-lime-400 rounded-full',
    },
    {
      className: 'absolute bottom-96 right-10 w-12 h-12 bg-cyan-400 rounded-lg',
    },
    {
      className: 'absolute bottom-1/4 left-1/2 w-14 h-10 bg-red-500 rounded-md',
    },
    {
      className:
        'absolute bottom-1/2 left-1/3 w-16 h-8 bg-pink-400 rounded-full',
    },
    {
      className:
        'absolute bottom-3/4 left-1/4 w-12 h-20 bg-purple-400 rounded-lg',
    },
  ]

  return (
    <>
      {shapes.map((shape, idx) => (
        <div key={idx} className={shape.className}></div>
      ))}
    </>
  )
}

export default Bg_Banner
