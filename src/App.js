import React from 'react';
import Header from './component/header.jsx'
import Footer from './component/footer.jsx'
import Tasks from './component/tasks/tasks.jsx'

function App() {
  return (
    <React.Fragment>
      <Header
        title='Tasks'
      />
      <Tasks/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
