import React, { useState, useEffect } from "react";

const sortUser = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setSortedUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange1 = () => {
    const sorted = [...users].sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    setSortedUsers(sorted);
  };

  const handleChange2 = () => {
    const sorted = [...users].sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    );
    setSortedUsers(sorted);
  };

  return (
    <div>
      <h2>список пользователей</h2>
      <button onClick={handleChange1}>по возростанию</button>
      <button onClick={handleChange2}>по убыыванию</button>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
//Напишите код для получения данных о пользователях и отображения имен
// пользователей. Должны быть две кнопки для сортировки имен по возрастанию и по убыванию.

export default sortUser;
