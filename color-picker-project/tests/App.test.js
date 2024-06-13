import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import { getGroqChatCompletion } from './lib/groq-api';

// Mock the child components
jest.mock('./components/hero/Hero', () => () => <div>Hero Component</div>);
jest.mock('./components/navbar/Navbar', () => () => <div>Navbar Component</div>);
jest.mock('./components/prompt-form/PromptForm', () => () => <div>PromptForm Component</div>);

// Mock the getGroqChatCompletion function
jest.mock('./lib/groq-api', () => ({
  getGroqChatCompletion: jest.fn(),
}));

describe('App Component', () => {
  beforeAll(async () => {
    getGroqChatCompletion.mockResolvedValue('Mocked Response');
    await getGroqChatCompletion();
  });

  test('renders the Navbar component', () => {
    render(<App />);
    const navbarElement = screen.getByText(/Navbar Component/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders the Hero component', () => {
    render(<App />);
    const heroElement = screen.getByText(/Hero Component/i);
    expect(heroElement).toBeInTheDocument();
  });

  test('renders the PromptForm component', () => {
    render(<App />);
    const promptFormElement = screen.getByText(/PromptForm Component/i);
    expect(promptFormElement).toBeInTheDocument();
  });
});
