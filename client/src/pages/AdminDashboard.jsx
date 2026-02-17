import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Modal, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Snackbar, 
  Alert,
  IconButton,
  Chip,
  Avatar,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import RefreshIcon from '@mui/icons-material/Refresh';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { programsAPI, newsAPI, leadersAPI } from '../services/api';

// Styled components for professional look
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
}));

const StatCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto',
  border: '1px solid rgba(0,0,0,0.1)',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
}));

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalPrograms: 0,
    totalNews: 0,
    totalLeaders: 0,
    recentActivity: []
  });

  const [programs, setPrograms] = useState([]);
  const [news, setNews] = useState([]);
  const [leaders, setLeaders] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    duration: '',
    requirements: '',
    name: '',
    position: '',
    phone: '',
    qualification: '',
    image: null
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch data from APIs
  const fetchData = async () => {
    try {
      const [programsRes, newsRes, leadersRes] = await Promise.all([
        programsAPI.getAll(),
        newsAPI.getAll(),
        leadersAPI.getAll()
      ]);

      setPrograms(programsRes.data);
      setNews(newsRes.data);
      setLeaders(leadersRes.data);

      setStats({
        totalPrograms: programsRes.data.length,
        totalNews: newsRes.data.length,
        totalLeaders: leadersRes.data.length,
        recentActivity: [
          ...programsRes.data.slice(0, 2).map(item => ({ ...item, type: 'Program', name: item.title })),
          ...newsRes.data.slice(0, 2).map(item => ({ ...item, type: 'News', name: item.title })),
          ...leadersRes.data.slice(0, 2).map(item => ({ ...item, type: 'Leader', name: item.name }))
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5)
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      showSnackbar('Error loading dashboard data', 'error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (type) => {
    setModalType(type);
    setFormData({
      title: '',
      description: '',
      content: '',
      duration: '',
      requirements: '',
      name: '',
      position: '',
      phone: '',
      qualification: '',
      image: null
    });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalType('');
    setFormData({
      title: '',
      description: '',
      content: '',
      duration: '',
      requirements: '',
      name: '',
      position: '',
      phone: '',
      qualification: '',
      image: null
    });
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Client-side validation
    let isValid = true;
    let validationErrors = [];

    switch (modalType) {
      case 'program':
        if (!formData.title.trim()) {
          validationErrors.push('Program title is required');
          isValid = false;
        }
        if (!formData.description.trim()) {
          validationErrors.push('Program description is required');
          isValid = false;
        }
        if (!formData.duration.trim()) {
          validationErrors.push('Program duration is required');
          isValid = false;
        }
        if (!formData.requirements.trim()) {
          validationErrors.push('Program requirements are required');
          isValid = false;
        }
        break;

      case 'news':
        if (!formData.title.trim()) {
          validationErrors.push('News title is required');
          isValid = false;
        }
        if (!formData.content.trim()) {
          validationErrors.push('News content is required');
          isValid = false;
        }
        break;

      case 'leader':
        if (!formData.name.trim()) {
          validationErrors.push('Leader name is required');
          isValid = false;
        }
        if (!formData.position.trim()) {
          validationErrors.push('Leader position is required');
          isValid = false;
        }
        if (!formData.phone.trim()) {
          validationErrors.push('Leader phone number is required');
          isValid = false;
        }
        if (!formData.qualification.trim()) {
          validationErrors.push('Leader qualification is required');
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      showSnackbar(validationErrors.join(', '), 'error');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();

      switch (modalType) {
        case 'program':
          formDataToSend.append('title', formData.title);
          formDataToSend.append('duration', formData.duration);
          formDataToSend.append('description', formData.description);
          formDataToSend.append('requirements', formData.requirements);
          if (formData.image) {
            formDataToSend.append('image', formData.image);
          }

          await programsAPI.create(formDataToSend, token);
          showSnackbar('Program added successfully!', 'success');
          break;

        case 'news':
          formDataToSend.append('title', formData.title);
          formDataToSend.append('content', formData.content);
          if (formData.image) {
            formDataToSend.append('image', formData.image);
          }

          await newsAPI.create(formDataToSend, token);
          showSnackbar('News article published successfully!', 'success');
          break;

        case 'leader':
          formDataToSend.append('name', formData.name);
          formDataToSend.append('position', formData.position);
          formDataToSend.append('phone', formData.phone);
          formDataToSend.append('qualification', formData.qualification);
          if (formData.image) {
            formDataToSend.append('image', formData.image);
          }

          await leadersAPI.create(formDataToSend, token);
          showSnackbar('Leader added successfully!', 'success');
          break;

        default:
          showSnackbar('Invalid form type', 'error');
      }

      // Refresh data after successful creation
      fetchData(); // This will refetch all data
      handleCloseModal();

    } catch (error) {
      console.error('Error creating item:', error);
      let errorMessage = 'Failed to add item';
      if (error.response?.data?.errors) {
        // Handle validation errors from express-validator
        const validationErrors = error.response.data.errors.map(err => err.msg);
        errorMessage = validationErrors.join(', ');
      } else if (error.response?.data?.msg) {
        errorMessage = error.response.data.msg;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      showSnackbar(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  const renderForm = () => {
    switch (modalType) {
      case 'program':
        return (
          <>
            <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#667eea' }}>
              Add New Program
            </Typography>
            <TextField
              fullWidth
              name="title"
              label="Program Title"
              value={formData.title}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="duration"
              label="Duration"
              value={formData.duration}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="requirements"
              label="Requirements"
              multiline
              rows={3}
              value={formData.requirements}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              type="file"
              name="image"
              onChange={handleFileChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
          </>
        );

      case 'news':
        return (
          <>
            <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#667eea' }}>
              Add News Article
            </Typography>
            <TextField
              fullWidth
              name="title"
              label="Article Title"
              value={formData.title}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="content"
              label="Content"
              multiline
              rows={6}
              value={formData.content}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              type="file"
              name="image"
              onChange={handleFileChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
          </>
        );

      case 'leader':
        return (
          <>
            <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#667eea' }}>
              Add New Leader
            </Typography>
            <TextField
              fullWidth
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="position"
              label="Position"
              value={formData.position}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="phone"
              label="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="qualification"
              label="Qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              type="file"
              name="image"
              onChange={handleFileChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #8B7355 0%, #A9A9A9 100%)',
      p: 3 
    }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ color: 'white', fontWeight: 'bold' }}>
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            backgroundColor: '#dc3545',
            '&:hover': { backgroundColor: '#c82333' },
            color: 'white',
            px: 3,
            py: 1
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <StatCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssignmentIcon sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4">{stats.totalPrograms}</Typography>
              </Box>
              <Typography variant="h6">Total Programs</Typography>
            </CardContent>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EventNoteIcon sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4">{stats.totalNews}</Typography>
              </Box>
              <Typography variant="h6">News Articles</Typography>
            </CardContent>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4">{stats.totalLeaders}</Typography>
              </Box>
              <Typography variant="h6">Leaders</Typography>
            </CardContent>
          </StatCard>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <AddIcon sx={{ fontSize: 60, color: '#667eea', mb: 2 }} />
              <Typography variant="h6" gutterBottom>Add New Program</Typography>
              <Button
                variant="contained"
                onClick={() => handleOpenModal('program')}
                sx={{ mt: 2, backgroundColor: '#667eea', '&:hover': { backgroundColor: '#5a67d8' } }}
              >
                Create Program
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <AddIcon sx={{ fontSize: 60, color: '#48bb78', mb: 2 }} />
              <Typography variant="h6" gutterBottom>Add News Article</Typography>
              <Button
                variant="contained"
                onClick={() => handleOpenModal('news')}
                sx={{ mt: 2, backgroundColor: '#48bb78', '&:hover': { backgroundColor: '#38a169' } }}
              >
                Publish News
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <AddIcon sx={{ fontSize: 60, color: '#ed8936', mb: 2 }} />
              <Typography variant="h6" gutterBottom>Add New Leader</Typography>
              <Button
                variant="contained"
                onClick={() => handleOpenModal('leader')}
                sx={{ mt: 2, backgroundColor: '#ed8936', '&:hover': { backgroundColor: '#dd6b20' } }}
              >
                Add Leader
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#667eea', fontWeight: 'bold' }}>
                Recent Programs
              </Typography>
              {programs.length > 0 ? (
                <Box>
                  {programs.slice(0, 5).map((program, index) => (
                    <Box key={program._id} sx={{ mb: 2, pb: 2, borderBottom: index < programs.length - 1 ? '1px solid #eee' : 'none' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>{program.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {program.duration} • {new Date(program.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No programs added yet
                </Typography>
              )}
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#48bb78', fontWeight: 'bold' }}>
                Recent News
              </Typography>
              {news.length > 0 ? (
                <Box>
                  {news.slice(0, 5).map((article, index) => (
                    <Box key={article._id} sx={{ mb: 2, pb: 2, borderBottom: index < news.length - 1 ? '1px solid #eee' : 'none' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>{article.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {new Date(article.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No news articles added yet
                </Typography>
              )}
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Modal for forms */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContainer>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography id="modal-title" variant="h5" component="h2">
              {modalType === 'program' && 'Add New Program'}
              {modalType === 'news' && 'Add News Article'}
              {modalType === 'leader' && 'Add New Leader'}
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <form onSubmit={handleSubmit}>
            {renderForm()}

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
                type="button"
                variant="outlined"
                onClick={handleCloseModal}
                disabled={loading}
                sx={{ flex: 1 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  flex: 1,
                  backgroundColor: '#667eea',
                  '&:hover': { backgroundColor: '#5a67d8' }
                }}
              >
                {loading ? 'Creating...' : 'Create'}
              </Button>
            </Box>
          </form>
        </ModalContainer>
      </Modal>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminDashboard;