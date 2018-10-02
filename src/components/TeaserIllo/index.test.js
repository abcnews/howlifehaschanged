const React = require('react');
const renderer = require('react-test-renderer');

const TeaserIllo = require('.');

describe('TeaserIllo', () => {
  test('It renders', () => {
    const component = renderer.create(<TeaserIllo />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
