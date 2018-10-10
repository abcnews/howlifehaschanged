const React = require('react');
const renderer = require('react-test-renderer');

const SlopeChart = require('.');

describe('SlopeChart', () => {
  test('It renders', () => {
    const component = renderer.create(<SlopeChart />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
