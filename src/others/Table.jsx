import { useState } from 'react'
import { Link } from 'react-router-dom'
import MyModal from './Modal'

export default function Table({ data, mutate, type }) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState({
    status: false,
    item: {}
  })
  const searchedData = data.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase())
  )

  return (
    <div className='mb-32 relative'>
      <Link
        to='/'
        className='text-blue-500 font-bold flex items-center justify-between w-32'
      >
        <span className='text-3xl'>↼</span> GO HOME
      </Link>
      <div className='my-4'>
        <input
          onChange={e => setText(e.target.value)}
          type='text'
          placeholder='search here...'
          className='w-full p-2 text-lg  text-center rounded-lg ring-2 ring-slate-200 focus:ring-slate-500'
        />
      </div>
      <table className='table-auto w-full'>
        <thead className=' border-b-gray-300 border-b-2'>
          <tr>
            <th className='text-start'>Name</th>
            <th className='text-start'>Price</th>
            <th className='text-end'>action</th>
          </tr>
        </thead>
        <tbody>
          {searchedData.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : ''}>
              <td className='p-2 border-b-[1px] border-b-gray-200'>
                {item.name}
              </td>
              <td className='p-2 border-b-[1px] border-b-gray-200'>
                {item.price}
              </td>
              <td className='p-2 text-end'>
                <button
                  onClick={() => setOpen({ item, status: true })}
                  className='bg-slate-400 px-4 rounded focus:ring-2 focus:ring-cyan-400'
                >
                  ✍️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='fixed bottom-10 right-10'>
        <Link
          to={`/create/${type}`}
          className='text-4xl bg-blue-500 py-4 px-5 rounded-full text-white font-bold'
        >
          ＋
        </Link>
      </div>
      <MyModal open={open} setOpen={setOpen} type={type} mutate={mutate} />
    </div>
  )
}
