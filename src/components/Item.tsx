/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Timeago from 'react-timeago'
const Item = (item) => {
  return (
    <div
      key={item.id}
      className="col-span-1  flex flex-col rounded-lg border border-gray-300  text-center hover:border-gray-400 hover:shadow-md"
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
        <div className="relative bottom-8 mx-auto mt-2 w-fit justify-between rounded-md border px-3 text-center text-xs text-gray-500 dark:border-gray-500 dark:text-gray-300">
          <p>
            created&nbsp;
            <Timeago date={item.pushedAt} />
          </p>
          <p>
            updated&nbsp;
            <Timeago date={item.updatedAt} />
          </p>
        </div>
        {/* <div className="relative bottom-2 mx-auto mb-2 flex justify-center space-x-[7px] px-3 text-sm">
          {
            //@ts-ignore
            // fix typing for "nodes"
            item.repositoryTopics.nodes.map((topic: any, index: number) => (
              <div
                className=" rounded-md border border-gray-300 px-[5px] text-xs text-gray-500 hover:border-gray-400 dark:border-gray-500  dark:text-gray-300"
                key={index}
              >
                {topic.topic.name}
              </div>
            ))
          }
        </div> */}
      </a>
    </div>
  )
}

export default Item
