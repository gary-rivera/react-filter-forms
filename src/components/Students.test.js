import { render } from '@testing-library/react';
import Students from './Students';

let studentsTest = [];
let filtersTest = '';

beforeEach(() => {
  studentsTest = [
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
    {
      city: "LA",
      company: "Google", 
      email: "user3@domain.com", 
      firstName: "user3", 
      grades: ['0', '0', '0'],
      id: "3",
      lastName: "user3",
      pic: "https://as1.ftcdn.net/jpg/03/46/83/96/500_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      skill: "JS",
      tags: ["tag1"]
    }, 
  ]
  
  filtersTest = {
    "name": "",
    "tag": ""
  }
  
})

  it('renders without crashing', () => {
    render(<Students students={studentsTest} filters={filtersTest} />);
  });
  
  it("filters by name correctly", () => {
    filtersTest.name = "user1";
    const { container } = render(<Students students={studentsTest} filters={filtersTest} />);
    const renderedStudents = container.querySelectorAll('.student-info');

    expect(renderedStudents.length).toEqual(1);
    expect(container).toHaveTextContent('USER1');
    expect(container).not.toHaveTextContent('USER2');
  });

  it("filters by tag correctly", () => {
    filtersTest.tag = "tag1";
    const { container } = render(<Students students={studentsTest} filters={filtersTest} />);
    const renderedStudents = container.querySelectorAll('.student-info');

    expect(renderedStudents.length).toEqual(2);
    expect(container).toHaveTextContent('USER1');
    expect(container).toHaveTextContent('USER3');
    expect(container).not.toHaveTextContent('USER2');
  });

  it("filters by both name and tag correctly", () => {
    filtersTest.name = "user";
    filtersTest.tag = "tag1";

    const { container } = render(<Students students={studentsTest} filters={filtersTest} />);
    const renderedStudents = container.querySelectorAll('.student-info');

    expect(renderedStudents.length).toEqual(2);
    expect(container).toHaveTextContent('USER1');
    expect(container).toHaveTextContent('USER3');
    expect(container).not.toHaveTextContent('USER2');
  });
  
  it("matches snapshot", () => {
    const { container } = render(<Students students={studentsTest} filters={filtersTest} />);
  expect(container).toMatchSnapshot();
});