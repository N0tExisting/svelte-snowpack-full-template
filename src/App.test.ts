import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import App from './App.svelte';

describe('<App>', () => {
  it('Renders without crashing', () => {
    expect(render(App))
  })
  it('Renders learn Svelte link', () => {
    const { getByText } = render(App);
    const linkElement = getByText(/learn svelte/i);
    expect(document.body.contains(linkElement));
  });
});
