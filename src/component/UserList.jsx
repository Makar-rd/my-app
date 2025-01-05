import React, { useState, useEffect } from "react";

const userList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h2 className="mb-4 text-primary">Search UserList</h2>
      <input
        placeholder="search"
        name="search"
        id="search"
        value={search}
        type="text"
        className="form-control w-50 rounded shadow-sm p-2 border-primary text-center"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group list-group-flush w-50 mx-auto">
        {handleChange.map((user) => {
          return (
            <li
              className="list-group-item text-secondary fw-bold"
              key={user.id}
            >
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default userList;
