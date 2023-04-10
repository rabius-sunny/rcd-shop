import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Create() {
  const { type } = useParams()
  const [data, setData] = useState({
    name: '',
    price: ''
  })
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    console.log('type', type)
    axios
      .post(
        `https://datacenter.darulislam.foundation/library/shop/${type}`,
        data
      )
      .then(res => {
        if (res.data.message === 'ok') {
          alert('Successfull created')
        }
      })
      .catch(err => alert('error occured'))
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-bold text-slate-500'>
        Create a {type}
      </h1>
      <hr />
      <form className='mt-2' onSubmit={handleSubmit}>
        <p className='font-semibold text-slate-400'>Name</p>
        <input
          onChange={onChange}
          required
          type='text'
          name='name'
          className='w-full py-2 px-3 text-lg rounded-lg ring-2 ring-slate-200 focus:ring-slate-500'
        />
        <p className='font-semibold text-slate-400 mt-4'>Price</p>
        <input
          onChange={onChange}
          required
          type='text'
          name='price'
          className='w-full py-2 px-3 text-lg rounded-lg ring-2 ring-slate-200 focus:ring-slate-500'
        />
        <input
          type='submit'
          className='my-8 w-full bg-slate-500 py-2 rounded-lg text-white font-bold'
          value='Post'
        />
      </form>
    </div>
  )
}
