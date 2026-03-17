import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AdminBackup = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4">Backup Management</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This feature is under development.
        </Typography>
      </Box>
    </Container>
  );
};

export default AdminBackup;
