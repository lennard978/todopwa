import React from "react";
import { IoClose } from "react-icons/io5";
export const List = ({ items, setItems, deleteItem }) => {
  return (
    <>
      {items.length !== 0 && (
        <article>
          <ul className="bg-gray-700 mx-5 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
            {items.map(({ id, title }) => (
              <ul className="todo-list flex items-center px-5  justify-between  border-b border-gray-600">
                <li key={id} className=" text-white py-3 tracking-wider">
                  {title}
                </li>
                <button onClick={() => deleteItem(id)} className="text-xl">
                  <IoClose className="text-red-400" />
                </button>
              </ul>
            ))}

            <ul className="flex items-center justify-between px-5 py-3">
              <li>
                <p className="text-sm text-gray-400">
                  {items.length} items left
                </p>
              </li>
              <li>
                <button
                  className="text-sm text-gray-400"
                  onClick={() => setItems([])}
                >
                  clear list
                </button>
              </li>
            </ul>
          </ul>
        </article>
      )}
    </>
  );
};
