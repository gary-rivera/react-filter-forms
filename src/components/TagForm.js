import './TagForm.css'
import { useState } from 'react';

/** Form for add a tag for a student.
 *
 * Props:
 * - addTag (function to update StudentCard state for filters)
 *
 * { StudentCard } -> TagForm
 */

function TagForm({ addTag }) {
  const [formInput, setFormInput] = useState('');

  function handleChange(evt){
    evt.preventDefault();
    const { value } = evt.target;

    setFormInput(value)
  }

  function handleSubmit(evt){
    evt.preventDefault();
    addTag(formInput)
    setFormInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="tag-form" 
        type="text"
        placeholder="Add a tag"
        name="addTag"
        value={formInput}
        onChange={handleChange}
        autoComplete="off"
      />
    </form>
  )
}

export default TagForm;