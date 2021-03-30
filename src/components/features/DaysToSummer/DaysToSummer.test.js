import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  component: '.component',
};

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}`);

    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find(select.component).text();
    expect(renderedDate).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2021-05-21', '31 days to summer');
  checkDescriptionAtDate('2021-06-20', '1 day to summer');
  checkDescriptionAtDate('2021-06-21', '');
  checkDescriptionAtDate('2021-10-10', '254 days to summer');
  checkDescriptionAtDate('2021-06-25', '');
  checkDescriptionAtDate('2021-09-23', '');
  checkDescriptionAtDate('2022-05-23', '29 days to summer');
});