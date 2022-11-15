import Modal from './components/Modal';

import Header from './components/main/Header';
import Form from './components/main/Form';
import Loading from './components/main/Loading';
import Result from './components/main/Result';
import Footer from './components/main/Footer';

function App() {
  return (
    <>
      <main>
        <Header />
        <Form />
        <Loading />
        <Result />
        <Footer />
      </main>
      <Modal />
    </>
  );
}

export default App;
