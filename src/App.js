import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navber'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'

function App() {
  return (
   <BrowserRouter>
   <Box sx={{ backgroundColor: '#000' }}>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
   </Box>
   </BrowserRouter>
  );
}

export default App;
