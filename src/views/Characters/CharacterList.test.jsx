import CharacterList from './CharacterList';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('CharacterList test', () => {
  it('Rendering the list of characters', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <Route path="/characters">
          <CharacterList />
        </Route>
      </MemoryRouter>
    );
    screen.getByText('Characters');
    const mock = await screen.findByText('Rick Sanchez');

    expect(mock).toBeInTheDocument();
  });
});
