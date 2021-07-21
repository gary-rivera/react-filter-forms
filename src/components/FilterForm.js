import './FilterForm.css';
import { useState, useEffect } from 'react';

/** Form for filtering by name or tags of students.
 *
 * Props:
 * - filters (state from parent component to be updated by event handlers)
 * - addFilter (function to update main state for filters)
 *
 * { Main } -> FilterForm
 */

// TODO: position sticky to keep from scrolling within div?

function FilterForm({filters, addFilter}) {
  const [formData, setFormData] = useState(filters);
  
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(fData => ({
        ...fData,
        [name]: value
      }
    ))
  }

  useEffect(() => {
    addFilter(formData)
  }, [formData, filters, addFilter])
  
  return (
    <form className="filter-form">
      <input 
        label="name"
        name="name"
        htmlFor="name"
        value={formData.name} 
        placeholder="Search by name" 
        onChange={handleChange}
        autoComplete="off"
      />
      <input 
        label="tag"
        name="tag"
        htmlFor="tag"
        value={formData.tag} 
        placeholder="Search by tag" 
        onChange={handleChange}
        autoComplete="off"
      />
    </form>
  )
}

export default FilterForm;