import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import UserTable from './component/UserTable';
import UserList from './component/UserList';
// import Error from './component/Error';
import SortUser from './component/SortUser';
import Form from './component/Form';
function App() {

  return (
    <>
    <Form />
    {/* <Error /> */}
      <SortUser />
      <UserTable />
      <UserList />
    </>
  );
}

export default App;
