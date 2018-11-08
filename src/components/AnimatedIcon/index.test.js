const React = require('react');
const renderer = require('react-test-renderer');

const AnimatedIcon = require('.');

describe('AnimatedIcon', () => {
  test('It renders', () => {
    const component = renderer.create(<AnimatedIcon />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
