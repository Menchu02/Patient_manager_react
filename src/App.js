import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import PatientList from './components/PatientList/PatientList';

function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <Form />
      <PatientList />
    </div>
  );
}

export default App;
