import React, { useEffect, useState } from "react";

const Korzina = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const SERVER_URL = "http://localhost:3000/items";

  useEffect(() => {
    async function getTodos(query, endpoint = SERVER_URL) {
      try {
        query ? (query = `${query}`) : (query = ``);
        const response = await fetch(`${endpoint}${query}`);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        // console.log("json", json);
        setData(json);
        return json;
      } catch {
        console.log("ошибка");
      }
    }

    getTodos();
  }, []);

  //   console.log("todos", data);

  const addToItems = (id) => {
    const dataProducts = data.find((dataProduct) => dataProduct.id === id);
    const itemProducts = items.find((itemProducts) => itemProducts.id === id);
    if (itemProducts) {
      const updateItems = items.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: (element.quantity || 1) + 1 };
        }
        return element;
      });
      setItems(updateItems);
    } else {
      setItems([...items, { ...dataProducts, quantity: 1 }]);
    }
    console.log("addToItems", dataProducts);
    console.log("items", items);
  };

  const updateQuantity = (id, newQuantity) => {
    const updateItems = items.map((element) => {
      if (element.id === id) {
        return { ...element, quantity: newQuantity };
      }
      return element;
    });
    setItems(updateItems);
  };

  const clearItems = (id) => {
    items.splice(id, 1);
    updateQuantity();
    console.log("удаление из корзины", items);
  };

  const itogoItems = () => {
    return items.reduce(
      (itog, items) => itog + items.price * items.quantity,
      0
    );
  };

  return (
    <div>
      <h2>доступные товары</h2>
      <ul>
        {data.map((el) => {
          return (
            <li key={el.id}>
              {el.name} - {el.price}{" "}
              <button onClick={() => addToItems(el.id)}>Add</button>
            </li>
          );
        })}
      </ul>
      <h2>корзина с товароми</h2>
      <ul>
        {items.map((el) => (
          <li key={el.id}>
            {el.name} - {el.price}{" "}
            <select
              onChange={(e) => updateQuantity(el.id, Number(e.target.value))}
            >
              {[...Array(5).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
            <button onClick={() => clearItems()}>remove</button>
          </li>
        ))}
      </ul>
      <h2>Общая цена или Итоговая цена</h2>
      <span className="text-primary fw-bold ">Итого: {itogoItems()} Бачей</span>
    </div>
  );
};

export default Korzina;
