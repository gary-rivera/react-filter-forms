import { render } from '@testing-library/react';
import Main from './Main';

const students = [
  {
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
  }, 
  {
    city: "LA",
    company: "Google", 
    email: "user2@domain.com", 
    firstName: "user2", 
    grades: ['0', '0', '0'],
    id: "2",
    lastName: "user2",
    pic: "https://as1.ftcdn.net/jpg/03/46/83/96/500_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    skill: "JS",
    tags: []
  }, 
]
it('renders without crashing', function () {
  render(<Main students={students} />);
});

it("renders the correct amount of students", () => {
  const { container } = render(<Main students={students} />)
  const studentCards = container.querySelectorAll('.student-card')
  expect(studentCards.length).toEqual(2);
});

it("matches snapshot", function () {
  const { container } = render(<Main students={students} />);
  expect(container).toMatchSnapshot();
});