import Summary from './components/Summary.jsx';
import Preview from './components/Preview.jsx';

import './App.css';

const App = () => {
  return (
    <main className="main_background">
      <div className="main_content">
        <Summary />
        <Preview />
      </div>
    </main>
  );
};

export default App;
