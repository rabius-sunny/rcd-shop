import { Link } from 'react-router-dom'
import { categories } from '../assets/fakedata'

export default function Home() {
  return (
    <>
      <h1 className='my-4 text-3xl text-slate-600 text-center font-bold'>
        Product Categories
      </h1>
      <hr />
      <div className='mt-8 mb-12'>
        <div className='grid grid-cols-2 gap-4'>
          {categories.map((item, idx) => (
            <Link
              to={item.slug}
              key={idx}
              className='col-span-1 bg-white text-center text-2xl text-cyan-500 border-2 border-cyan-100 rounded-lg py-10 shadow-lg'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
