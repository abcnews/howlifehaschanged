const React = require('react');
const renderer = require('react-test-renderer');

const ChartStory = require('.');

describe('ChartStory', () => {
  test('It renders', () => {
    const component = renderer.create(<ChartStory />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
