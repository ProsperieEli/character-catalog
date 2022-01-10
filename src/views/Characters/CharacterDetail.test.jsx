import CharacterDetail from './CharacterDetail';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('CharacterList test', () => {
  it('Rendering the characters', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>
      </MemoryRouter>
    );
    screen.getByText('Loading character...');
    await screen.findByText('Rick Sanchez');
  });
});
