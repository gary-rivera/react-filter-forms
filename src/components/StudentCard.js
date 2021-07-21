import "./StudentCard.css";
import { useState, useEffect } from 'react';
import Tag from './Tag'
import TagForm from './TagForm'
import { averageScore } from '../utils/HelperFunctions';
import { v4 as uuid } from 'uuid';

/** Render a card showing the corresponding students data.
 *
 * Props:
 * - student (an object with details about the student)
 *
 * { Students } -> StudentCard -> { Tag, TagForm }
 */


function StudentCard({ student }) {
  let renderedTestScoreCount = 1; 
  const { 
    company, 
    email, 
    firstName, 
    lastName, 
    grades, 
    pic, 
    skill, 
    tags
  } = student;

  // state control for showing grades score list
  const [toggle, setToggle] = useState(true);
  // state control for students current tags
  const [studentTags, setStudentTags] = useState(tags);
  

  // helper function TagForm uses to pass up form data to tags state.
  function addTag(tag) {
    setStudentTags(studentTags => [...studentTags, tag])
  }
  
  function renderTags(tags) {
    return <div className="tag-icons">
      { tags.map(tag => (
        <Tag key={uuid()} tag={tag} />
      ))
      }
    </div>
  }

  // update tags value for parent (student.tags) and children (renderTags()) component
  useEffect(() => {
    renderTags(studentTags);
    student.tags = [...studentTags]
  }, [student, studentTags])

  return (
    <div className="student-card"> 
      <div className="profile-pic">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="student-info"> 
        <h1>{`${firstName} ${lastName}`.toUpperCase()}</h1>
        <div className="details">
          <h4 className="student-email">Email: {email}</h4>
          <h4 className="student-company">Company: {company}</h4>
          <h4 className="student-skill">Skill: {skill}</h4>
          <h4 className="student-average-score">Average: {averageScore(grades)}%</h4>
          <ul className={toggle ? 'hidden' : 'show'}>
            { 
              grades.map(grade => {
                return <li key={renderedTestScoreCount}> 
                          Test {renderedTestScoreCount++}:<span>{grade}%</span>
                        </li>
              })
            }
          </ul>
          <div className="tags-container">
            { studentTags.length > 0 &&
              renderTags(studentTags)
            }
            <TagForm student={student} addTag={addTag}/>
          </div>
        </div>
      </div>
      <button onClick={() => setToggle(!toggle)}>{ toggle ? '+' : '-'}</button>
    </div>
  )
}

export default StudentCard;