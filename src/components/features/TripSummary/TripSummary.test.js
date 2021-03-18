import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render valid link using id', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary image={'image'} name={'name'} cost={'cost'} days={1} id={expectedId} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('has valid name and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary tags={[]} image={expectedSrc} name={expectedAlt} cost={'cost'} days={1} id={'id'} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('renders correct cost,days', () => {
    const expectedCost = '1500$';
    const expectedDays = 5;
    const component = shallow(<TripSummary tags={[]} days={expectedDays} cost={expectedCost} image={'image'} name={'name'} id={'id'} />);

    expect(component.find('.details span').last().text()).toEqual(
      `from ${expectedCost}`
    );
    expect(component.find('.details span').first().text()).toEqual(
      `${expectedDays} days`
    );
  });

  it('should throw error without required props id, image, name, cost i days', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary tags={expectedTags} days={1} cost={'1234'} image={'image'} name={'name'} id={'id'} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render span if tags is falsy', () => {
    const component = shallow(<TripSummary  days={1} cost={'1234'} image={'image'} name={'name'} id={'id'} />);

    expect(component.hasClass('tags')).toBe(false);
  });
});