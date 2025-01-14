import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import UserTable from './component/UserTable';
import UserList from './component/UserList';
// import Error from './component/Error';
import SortUser from './component/SortUser';
import Form from './component/Form';
import Korzina from './component/Korzina';

// import TvProvider from './component/hooks/UseContext/TvProvider';
// import Friends from './component/hooks/UseContext/Friends';
// import Parent from './component/hooks/UseCallback/Parent';
// import ClickCounter from './component/hooks/UseRef/ClickCounter';
function App() {

  return (
    <>
    {/* //проверка хука useContext */}
    {/* <TvProvider>
      <Friends/>
    </TvProvider> */} 
    {/* //проверка хука useCallback and UseMemo*/}
      {/* <Parent /> */}
      {/* //проверка хука UseRef
<ClickCounter/> */}



    <Korzina/>
    -------------------------------------------------------------
    <Form />
    {/* <Error /> */}
      <SortUser />
      <UserTable />
      <UserList />
    </>
  );
}

export default App;
