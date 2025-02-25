import { Dashboard } from '../Dashboard';
import { Header } from '../Header';
import { Main } from '../Main';

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Dashboard />
      </Main>
    </>
  );
}
