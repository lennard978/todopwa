import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import { List } from "./components/List";
import { Logo } from "./components/Logo";
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};
const App = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      checked: false,
      title: text,
    };
    setItems([newItems, ...items]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const checkedItem = (id) => {
    const checkedList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(checkedList);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <main>
        <Logo />
        <Hero />
        <form
          className="flex items-center justify-center mt-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Enter your'e items"
            className="py-2 px-5 rounded-lg bg-gray-700 text-white tracking-wide"
            autoComplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        <List
          items={items}
          setItems={setItems}
          deleteItem={deleteItem}
          checkedItem={checkedItem}
        />
      </main>
    </>
  );
};

export default App;
