import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NotFound from './Components/NotFound';
import Dashboard from './Pages/Dashboard';
import Auth from './Pages/Auth';
import ViewLead from './Pages/ViewLead';
import CollectLead from './Pages/CollectLead';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCategories } from './Actions/categoryAction';

const App = () => {
  // const authData = useSelector((state) => state.auth.authData);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/create-lead' element={<CollectLead />} />
          <Route path='/view-lead' element={<ViewLead />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Box>
  )
};
export default App;
