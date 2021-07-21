import { render, fireEvent } from '@testing-library/react';
import TagForm from './TagForm';

function addTagTest() {
  return;
}

it('renders without crashing', () => {
  render(<TagForm addTag={addTagTest} />);
});

it("renders the correct amount of input elements", () => {
  const { container } = render(<TagForm addTag={addTagTest} />);
  const inputs = container.querySelectorAll('input')
  expect(inputs.length).toEqual(1);
});

it("recognizes a change to input through onChange event", () => {
  const { container } = render(<TagForm addTag={addTagTest} />);
  const input = container.querySelector('input')
  fireEvent.change(input , { target:{ value: 'test'}})

  expect(input).toContainHTML('test');
});

it("matches snapshot", () => {
  const { container } = render(<TagForm addTag={addTagTest} />);
  expect(container).toMatchSnapshot();
});

