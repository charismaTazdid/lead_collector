import { Box, Typography } from '@mui/material'
import CreateCategory from './Modal/CreateCategory'
import EntryLead from './Modal/EntryLead.jsx'

const CreateLeadBody = () => {
  return (
    <Box sx={{ backgroundColor: "#2F363F", minHeight: '90dvh' }}>
      <CreateCategory />
      <EntryLead />
    </Box>
  )
}

export default CreateLeadBody;
