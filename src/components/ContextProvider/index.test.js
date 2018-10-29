const React = require('react');
const renderer = require('react-test-renderer');

const ContextProvider = require('.');

describe('ContextProvider', () => {
  test('It renders', () => {
    const component = renderer.create(<ContextProvider />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
