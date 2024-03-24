import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import App from "../App"
import { MemoryRouter } from 'react-router-dom';
import { Router } from "react-router"

// TO DO: adaptar testes antigos quebrados
test.skip('renders app', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
});
