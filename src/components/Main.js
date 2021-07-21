import './Main.css';
import { useState } from 'react';
import FilterForm from './FilterForm';
import Students from './Students';

/** Main container for filtering forms and students
 *
 * Props:
 * - students: array of { student, ... }
 *
 * State:
 * - filters: object with a filter for each input 'name' and 'tag' that we could potentially filter by
 *
 * {App} -> Main -> { FilterForm }
 *               -> { Students }
 */

function Main({ students }) {
  const [filters, setFilters] = useState({
    "name": "",
    "tag": ""
  });

  // helper function FilterForm uses to pass up form data to filters state.
  function addFilter(filter){
    setFilters(filter);
  }

  return (
    <div className="main-container">
      <FilterForm
        filters={filters}
        addFilter={addFilter}
      />
      <Students students={students} filters={filters}/>
    </div>
  )
}

export default Main;