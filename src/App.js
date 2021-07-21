import './App.css';
import { useEffect, useState } from 'react';
import Main from './components/Main'
import HatchwayAPI from "./api/HatchwayAPI";

/** Site application.
 *
 * App -> Main
 **/

function App() {
  const [students, setStudents] = useState([]);
  
  // set state on initial component mount
  useEffect( function udpateStudentsOnRender() {
    async function updateStudents() {
      const studentsResp = await HatchwayAPI.getStudents();
      setStudents(() => [...studentsResp]);
    }
    updateStudents();
  }, []);

  return (
    <div className="App">
      <Main students={students} />
    </div>
  );
}

export default App;
