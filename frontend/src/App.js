import { Route, Routes } from 'react-router-dom';
import './App.css';
// import {Button} from '@chakra-ui/react'
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      {/* <Button colorScheme = 'blue'> Button </Button> */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          < Route path = '/chats' element = {<ChatPage/>}/>

        </Routes>
    </div>
  );
}

export default App;
