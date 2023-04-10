import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useState } from 'react'

export default function MyModal({ open, setOpen, type, mutate }) {
  const [data, setData] = useState({
    name: '',
    price: ''
  })
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const handleSubmit = _ => {
    if (data.name && data.price) {
      axios
        .patch(
          `https://datacenter.darulislam.foundation/library/shop/${type}`,
          {
            id: open.item._id,
            ...data
          }
        )
        .then(res => {
          if (res.data.message === 'ok') {
            alert('Successfully updated')
          }
        })
        .catch(err => alert('error occured'))
        .finally(() => {
          mutate()
          setData({ name: '', price: '' })
          setOpen({ status: false, item: {} })
        })
    } else {
      alert('empty state')
      return
    }
  }
  const handleDelete = _ => {
    if (window.confirm('Sure to delete ?')) {
      axios
        .delete(
          `https://datacenter.darulislam.foundation/library/shop/delete-${type}/${open.item._id}`
        )
        .then(res => {
          if (res.data.message === 'ok') {
            alert('deleted successfully')
          }
        })
        .catch(err => alert('error occured'))
        .finally(() => {
          mutate()
          setOpen({ status: false, item: {} })
        })
    }
  }
  const onClose = _ => {
    setOpen({ status: false, item: {} })
    setData({ name: '', price: '' })
  }
  return (
    <>
      <Transition appear show={open.status} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-40' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    ID is {open.item._id}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <div className='my-3'>
                      <input
                        onChange={onChange}
                        type='text'
                        name='name'
                        defaultValue={open.item.name}
                        className='w-full py-2 px-3 text-lg rounded-lg ring-2 ring-slate-200 focus:ring-slate-500'
                      />
                    </div>
                    <div className='my-3'>
                      <input
                        onChange={onChange}
                        type='text'
                        name='price'
                        defaultValue={open.item.price}
                        className='w-full py-2 px-3 text-lg rounded-lg ring-2 ring-slate-200 focus:ring-slate-500'
                      />
                    </div>
                  </div>

                  <div className='mt-4 flex justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={handleDelete}
                    >
                      delete data
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={handleSubmit}
                    >
                      update data
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
