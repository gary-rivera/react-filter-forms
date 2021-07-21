import axios from 'axios'; 

const BASE_URL = 'https://api.hatchways.io/assessment';

class HatchwayAPI {
  
  /*
    returns [{...}] where each object is - 
    [{
      city: "Text",
      company: "Text", 
      email: "Text@domain.com", 
      firstName: "Text", 
      grades: Array of strings i.e ['1', '2', '3'],
      id: "Text of numbers",
      lastName: "Text",
      pic: "Text of url",
      skill: "Text",
      tags: Array of strings i.e. ['tag1', 'tag2', 'tag3']
    }]
  */
  static async getStudents() {
    let students = await (await axios.get(`${BASE_URL}/students`)).data.students;
    students = students.map( student => ({ ...student, tags: []}))
    
    return students
  }
}

export default HatchwayAPI;