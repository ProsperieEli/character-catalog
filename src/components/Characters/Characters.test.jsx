import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Characters from './Characters';

describe('characters display', () => {
  it('renders character list', () => {
    const mock = [
      <Link
        to={{
          name: 'Rick',
          image: 'www.rick.com',
        }}
      ></Link>,
      {
        name: 'Morty',
        image: 'www.morty.com',
      },
    ];
    const container = render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Characters characters={mock} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
