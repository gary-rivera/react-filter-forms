import StudentCard from './StudentCard';
import { cleanData } from '../utils/HelperFunctions'

/** Render a card for each student's data and editable tags.
 *
 * Props:
 * - students: array of { student, ... }
 * - filters (state from parent component to be updated by event handlers)
 *
 * { Main } -> Students -> { StudentCard }
 */

function Students({ students, filters }) {
  // render each student in students after applying current filters from FilterForm
  function renderStudents(studentsList) {
    const filteredStudents = filterStudents(studentsList);
  
    return filteredStudents.map(student => (
      <StudentCard key={student.id} student={student}/>
    ))
  }

  function filterStudents(studentsList) {
    let filteredStudents = [];

    // no filters
    if(!filters.name && !filters.tag.length) return studentsList;

    // only name filters
    else if (filters.name && !filters.tag.length) filteredStudents = filterByName(studentsList);

    // only tag filters
    else if (!filters.name && filters.tag.length) filteredStudents = filterByTag(studentsList);

    // both name and tag filters
    else if (filters.name && filters.tag.length) {
      filteredStudents = filterByName(studentsList);
      filteredStudents = filterByTag(filteredStudents);
    }

    return filteredStudents
  }  
  
  function filterByName(studentsList) {
    return studentsList.filter(student => {
      const { fullName, nameFilter} = cleanData(student, filters);
      return fullName.includes(nameFilter);
    })
  }

  function filterByTag(studentsList) {
    return studentsList.filter(student => {
      const { tags, tagFilter } = cleanData(student, filters);
      return tags.some(tag => tag.includes(tagFilter));
    })
  }

  return (
    <>
      {students && (renderStudents(students))}
    </>
  )
}

export default Students;