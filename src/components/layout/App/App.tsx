import { Dashboard } from '../Dashboard';
import { Header } from '../Header';
import { Main } from '../Main';
import { Modals } from '../Modals';

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Dashboard />
      </Main>
      <Modals />
    </>
  );
};
