import { render } from '@testing-library/react';
import StudentCard from './StudentCard';

let studentTest = [];

beforeEach(() => {
  studentTest = {
    city: "SF",
    company: "Google", 
    email: "user1@domain.com", 
    firstName: "user1", 
    grades: ['0', '100'],
    id: "1",
    lastName: "user1",
    pic: "https://as1.ftcdn.net/jpg/03/46/83/96/500_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    skill: "JS",
    tags: ['tag1', 'tag2', 'tag3']
  }
})

it('renders without crashing', () => {
  render(<StudentCard student={studentTest} />);
});

it("renders correct amount of student components", () => {
  const { container } = render(<StudentCard student={studentTest} />);
  const renderedStudent = container.querySelectorAll('.student-info');
  
  expect(renderedStudent.length).toEqual(1);
});

it("renders correct student info", () => {
  const { container } = render(<StudentCard student={studentTest} />);
  const renderedStudent = container.querySelectorAll('.student-info');
  
  expect(renderedStudent.length).toEqual(1);
  expect(container).toHaveTextContent('USER1');
  expect(container).not.toHaveTextContent('USER2');
});


it("renders correct amount of test scores", () => {
  const { container } = render(<StudentCard student={studentTest} />);
  const renderedTestScores = container.querySelectorAll('li');

  expect(renderedTestScores.length).toEqual(2);
});

it("renders correct amount of tags", () => {
  const { container } = render(<StudentCard student={studentTest} />);
  const renderedTags = container.querySelectorAll('.tag');

  expect(renderedTags.length).toEqual(3);
});

it("renders correct average score", () => {
  const { container } = render(<StudentCard student={studentTest} />);
  const renderedAvgScore = container.querySelector('.student-average-score');

  expect(renderedAvgScore).toBeInTheDocument();
  expect(renderedAvgScore).toHaveTextContent('Average: 50%');
});

it("matches snapshot", () => {
  const { container } = render(<StudentCard student={studentTest} />);
expect(container).toMatchSnapshot();
});

