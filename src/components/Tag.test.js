import { render } from '@testing-library/react';
import Tag from './Tag';

const tagTest = 'tag123'

it('renders without crashing', () => {
  render(<Tag tag={tagTest} />);
});

it("matches snapshot", () => {
  const { container } = render(<Tag tag={tagTest} />);
  expect(container).toMatchSnapshot();
});