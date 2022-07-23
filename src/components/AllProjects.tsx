/* eslint-disable @next/next/no-img-element */
import { SearchIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Timeago from 'react-timeago'
import { Repo } from '../../typings'

export default function AllProjects({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((item: Repo) => {
      return item.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative  mt-12 max-w-xs">
        <div className="absolute inset-y-0 right-0 border-y border-transparent py-2 pr-3 text-sm">
          <SearchIcon className="h-5 w-5" />
        </div>
        <input
          type="text"
          className="block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-slate-800 dark:text-gray-300 dark:hover:shadow-sm dark:hover:shadow-white sm:text-sm"
          placeholder={placeholder}
          spellCheck="false"
          required
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.slice(0, 15).map((item: Repo, index: number) => (
            <div
              key={index}
              className="col-span-1 flex flex-col rounded-lg border border-gray-300 bg-gray-50 text-center  hover:border-gray-400 hover:shadow-md dark:bg-slate-800 dark:hover:shadow-sm dark:hover:shadow-white"
            >
              <a className="" href={item.url}>
                <div className="flex flex-1 flex-col p-8">
                  <img
                    src={item.openGraphImageUrl}
                    alt={item.name}
                    className=" mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  />

                  <div className="mt-2 min-w-0 flex-1 px-3">
                    <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h3>

                    <p className=" h-16 pt-2 font-sans text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="relative bottom-4 mx-auto mb-2 flex justify-center space-x-[7px] px-3 text-sm">
                  {item.repositoryTopics.nodes.map(
                    (topic: any, index: number) => (
                      <div
                        className=" rounded-md border border-gray-300 px-[5px] text-xs text-gray-500 hover:border-gray-400 dark:border-gray-500  dark:text-gray-300"
                        key={index}
                      >
                        {topic.topic.name}
                      </div>
                    )
                  )}
                </div>
                <div className="relative bottom-0 mx-auto flex p-2  text-center text-xs text-gray-500 dark:text-gray-300">
                  <p className="mx-1">
                    last updated&nbsp;
                    <Timeago date={item.updatedAt} />.
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data
            .map((item: Repo, index: number) => (
              <div
                key={index}
                className="col-span-1 flex flex-col rounded-lg border border-gray-300 bg-gray-50 text-center hover:border-gray-400 hover:shadow-md  dark:bg-slate-800 dark:hover:shadow-sm dark:hover:shadow-white"
              >
                <a className="" href={item.url}>
                  <div className="flex flex-1 flex-col p-8">
                    <img
                      src={item.openGraphImageUrl}
                      alt={item.name}
                      className=" mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                    />

                    <div className="mt-2 min-w-0 flex-1 px-3">
                      <h3 className="mt-6 text-2xl font-medium text-gray-900 dark:text-gray-100 sm:text-lg">
                        {item.name}
                      </h3>

                      <p className=" text-md h-16 pt-2 text-gray-400 md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative bottom-4 mx-auto mb-2 flex justify-center space-x-[7px] px-3 text-sm">
                    {item.repositoryTopics.nodes.map(
                      (topic: any, index: number) => (
                        <div
                          className=" rounded-md border border-gray-300 px-[5px] text-xs text-gray-500 hover:border-gray-400 dark:border-gray-500  dark:text-gray-300"
                          key={index}
                        >
                          {topic.topic.name}
                        </div>
                      )
                    )}
                  </div>
                  <div className="relative bottom-0 mx-auto flex p-2  text-center text-xs text-gray-500 dark:text-gray-300">
                    <p className="mx-1">
                      last updated&nbsp;
                      <Timeago date={item.updatedAt} />.
                    </p>
                  </div>
                </a>
              </div>
            ))
            .reverse()}
        </div>
      )}
    </div>
  )
}
