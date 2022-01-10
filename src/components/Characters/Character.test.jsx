import { render, screen } from '@testing-library/react';
import Character from './Character';

describe('Character test', () => {
  it('Character test works', () => {
    const mock = {
      image: 'www.example.com',
      name: 'Morty',
      species: 'Human',
      status: 'Alive',
    };
    const container = render(<Character character={mock} />);

    expect(container).toMatchSnapshot();
  });
});
