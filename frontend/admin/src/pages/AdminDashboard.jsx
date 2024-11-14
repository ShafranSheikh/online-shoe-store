import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

// Import icons for each link
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import CampaignIcon from '@mui/icons-material/Campaign';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ReportIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import SignUpIcon from '@mui/icons-material/PersonAdd';

import '../styles/home.css';

const AdminDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    fetch('http://localhost:3000/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          navigate('/');
        } else {
          console.error("Logout failed");
        }
      })
      .catch(error => console.error("Logout error:", error));
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admindashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admins">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Admins" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/adminuser">
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/adminpromoimages">
            <ListItemIcon><CampaignIcon /></ListItemIcon>
            <ListItemText primary="ADS" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/adminmenitem">
            <ListItemIcon><MaleIcon /></ListItemIcon>
            <ListItemText primary="Mens" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/adminwomenitem">
            <ListItemIcon><FemaleIcon /></ListItemIcon>
            <ListItemText primary="Womens" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/adminkiditem">
            <ListItemIcon><ChildCareIcon /></ListItemIcon>
            <ListItemText primary="Kids" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/reports">
            <ListItemIcon><ReportIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/signup">
            <ListItemIcon><SignUpIcon /></ListItemIcon>
            <ListItemText primary="Signup" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="admin-container">
      <div className="menu-icon-container">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </div>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>

      <main className="main-content">
        <header className="header">
          <h1>Admin Dashboard</h1>
        </header>

        <section className="dashboard-section">
          <div className="dashboard-card">Card 1</div>
          <div className="dashboard-card">Card 2</div>
          <div className="dashboard-card">Card 3</div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
