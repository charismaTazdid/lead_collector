import { Box, Typography } from '@mui/material'
import CreateCategory from './Modal/CreateCategory'
import EntryLead from './Modal/EntryLead'

const CreateLeadBody = () => {
  return (
    <Box>
      <CreateCategory />
      {/* Entry New Lead Information */}
      <EntryLead />
    </Box>
  )
}

export default CreateLeadBody;
