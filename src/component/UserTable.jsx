import React, { useState, useEffect } from "react";
import axios from "axios";
const userTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="container mt-4 ">
      <table className="border border-info-subtle table table-striped table-hover table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th className="align-middle">Name</th>
            <th className="align-middle">Username</th>
            <th className="align-middle">Street</th>
            <th className="align-middle">Suite</th>
            <th className="align-middle">City</th>
            <th className="align-middle">Zipcode</th>
            <th className="align-middle">Geo (Lat, Lng)</th>
            <th className="align-middle">Phone</th>
            <th className="align-middle">Website</th>
            <th className="align-middle">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="align-middle">{user.name}</td>
                <td className="align-middle">{user.username}</td>
                <td className="align-middle">{user.address.street}</td>
                <td className="align-middle">{user.address.suite}</td>
                <td className="align-middle">{user.address.city}</td>
                <td className="align-middle">{user.address.zipcode}</td>
                <td className="align-middle">
                  {" "}
                  {user.address.geo.lat}, {user.address.geo.lng}
                </td>
                <td className="align-middle">{user.phone}</td>
                <td className="align-middle">{user.website}</td>
                <td className="align-middle">
                  {user.company.name}
                  <br />
                  <em>{user.company.catchPhrase}</em> <br />
                  {user.company.bs}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default userTable;
