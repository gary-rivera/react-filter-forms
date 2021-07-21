import { render } from '@testing-library/react';
import FilterForm from './FilterForm';

const filtersTest = {
  "name": "",
  "tag": ""
}

function addFilterTest() {
  return
}

it('renders without crashing', function () {
  render(<FilterForm filters={filtersTest} addFilter={addFilterTest}/>);
});

it("renders the correct amount of input elements", () => {
  const { container } = render(<FilterForm 
                                filters={filtersTest} 
                                addFilter={addFilterTest}
                              />)
  const inputs = container.querySelectorAll('input')
  expect(inputs.length).toEqual(2);
});

it("matches snapshot", function () {
  const { container } = render(<FilterForm 
                                filters={filtersTest} 
                                addFilter={addFilterTest}
                              />)
  expect(container).toMatchSnapshot();
});