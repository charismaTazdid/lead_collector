import { Box } from '@mui/material'
import Navbar from '../Components/Navbar'
import Alluser from '../Components/AllUser'

const Dashboard = () => {
  return (
    <Box sx={{minHeight: "100vh", background: "linear-gradient(to right, #2C3335 0%, #2B2B52 100%)" }}>
      <Navbar />
      <Box mt={2}>
        <Alluser />
      </Box>
    </Box>
  )
}

export default Dashboard
