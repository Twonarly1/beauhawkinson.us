/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import TimeAgo from 'react-timeago'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Heading from './Heading'

const Achievements = ({ certificate, key }) => {
  const [showMore, setShowMore] = useState<boolean>()
  let [open, setOpen] = useState(false)

  function closeModal() {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
  }
  return (
    <div className="group" onClick={openModal}>
      <div
        key={key}
        className="relative flex cursor-pointer items-center justify-between space-x-4 rounded-lg border border-gray-300 p-2 px-6 hover:border-gray-400 hover:shadow-md"
      >
        <Image
          src={certificate.src}
          alt={certificate.name}
          height={100}
          width={100}
          quality={100}
        />
        <div className="text-left ">
          <p className="w-auto text-gray-900 hover:opacity-0 dark:text-gray-200 sm:w-80">
            {certificate.name}
          </p>
          <TimeAgo
            date={certificate.date}
            className=" text-xs text-gray-500 hover:opacity-0"
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white text-xs font-semibold text-black opacity-0 duration-300 ease-in-out hover:opacity-100">
          {certificate.description}
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center" onClick={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                onClick={closeModal}
                className=" fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity"
              />
            </Transition.Child>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="items-center justify-center rounded-lg bg-white text-lg text-black ">
                      <Dialog.Title className="mb-4">
                        <Heading title={`${certificate.name}`} />
                      </Dialog.Title>
                      <Heading subtitle={`${certificate.description}`} />
                      <a href={certificate.url}>
                        <p className="mt-2 text-sm text-gray-900 hover:underline dark:text-gray-300">
                          View Certificate... &rarr;
                        </p>
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default Achievements
