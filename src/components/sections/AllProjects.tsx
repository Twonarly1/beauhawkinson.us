/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Timeago from 'react-timeago'
import { SearchIcon } from '@heroicons/react/outline'
import { Repo } from '../../../typings'

type Props = {
  placeholder: string
  allPublicRepos: Repo[]
}

export default function AllProjects({ placeholder, allPublicRepos }: Props) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = allPublicRepos.filter((item: Repo) => {
      return item.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      //@ts-ignore
      setFilteredData(newFilter)
    }
  }

  return (
    <>
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
              className="commonBordering col-span-1 flex flex-col text-center dark:bg-slate-800"
            >
              <a href={item.url}>
                <div className="flex flex-1 flex-col p-8">
                  <img
                    src={item.openGraphImageUrl}
                    alt={item.name}
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  />

                  <div className="mt-2 min-w-0 flex-1 px-3">
                    <h3 className="offColorHeading mt-6 text-lg font-medium">
                      {item.name}
                    </h3>

                    <p className="h-16 pt-2 font-sans text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 space-y-1 lg:flex lg:space-y-0">
                  {item.repositoryTopics.nodes.map(
                    (topic: any, index: number) => (
                      <div
                        className="offColorHeading mx-auto w-fit rounded-md border border-gray-300 px-[5px] text-xs dark:border-gray-400 dark:font-light"
                        key={index}
                      >
                        {topic.topic.name}
                      </div>
                    )
                  )}
                </div>
                <div className="relative bottom-0 mx-auto flex p-2 text-center text-xs dark:font-light">
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
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPublicRepos
            .map((item: Repo, index: number) => (
              <div
                key={index}
                className="commonBordering col-span-1 flex flex-col text-center dark:bg-slate-800"
              >
                <a className="" href={item.url}>
                  <div className="flex flex-1 flex-col p-4">
                    <img
                      src={item.openGraphImageUrl}
                      alt={item.name}
                      className=" mx-auto h-32 w-32 flex-shrink-0 rounded-full p-2"
                    />

                    <div className="mt-2 min-w-0 flex-1 px-3">
                      <h3 className="offColorHeading mt-6 text-2xl font-medium sm:text-lg">
                        {item.name}
                      </h3>

                      <p className="mt-2 h-12 w-full text-center text-sm text-gray-500 md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 space-y-1 lg:flex lg:space-y-0">
                    {item.repositoryTopics.nodes.map(
                      (topic: any, index: number) => (
                        <div
                          className="offColorHeading mx-auto w-fit rounded-md border border-gray-300 px-[5px] text-xs dark:border-gray-400 dark:font-light"
                          key={index}
                        >
                          {topic.topic.name}
                        </div>
                      )
                    )}
                  </div>
                  <div className=" relative bottom-0 mx-auto flex p-2 text-xs dark:font-light">
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
    </>
  )
}
