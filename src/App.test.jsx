// src/App.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest'; 
import App from './App';
import fantasyBooks from './data/fantasy.json';

// Test 1: Verifica che il componente Welcome venga montato correttamente
test('Verifica che il componente Welcome venga montato correttamente', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const welcomeElement = await screen.findByRole(
    'heading',
    { name: /Benvenuto in EpiBooks!/i },
    { timeout: 3000 }
  );
  expect(welcomeElement).toBeInTheDocument();
});

// Test 2: Verifica che vengano renderizzate tante card quanti sono i libri
test('Verifica che vengano renderizzate tante card quanti sono i libri nel file json', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const bookCards = await screen.findAllByTestId('book-card');
  expect(bookCards).toHaveLength(fantasyBooks.length);
});

// Test 3: Verifica che CommentArea NON sia sulla homepage
test('Verifica che CommentArea non sia presente all\'avvio', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const commentAreaTitle = screen.queryByText('Recensioni');
  expect(commentAreaTitle).not.toBeInTheDocument();
});

// Test 4: Verifica che il filtraggio dei libri funzioni
test('Verifica che il filtraggio dei libri funzioni come previsto', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const searchInput = screen.getByPlaceholderText(/cerca un titolo/i);
  fireEvent.change(searchInput, { target: { value: 'kings' } });
  
  const filteredCards = await screen.findAllByTestId('book-card');
  expect(filteredCards).toHaveLength(1);
});

// Test 5: Verifica la navigazione alla pagina di dettaglio
test('Verifica che cliccando su un libro si navighi alla pagina di dettaglio', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const bookCards = await screen.findAllByTestId('book-card');
  const detailsButton = bookCards[0].querySelector('button');
  
  fireEvent.click(detailsButton);

  const detailsTitle = await screen.findByText(/dettagli del libro/i);
  expect(detailsTitle).toBeInTheDocument();
});