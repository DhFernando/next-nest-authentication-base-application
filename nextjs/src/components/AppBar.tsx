import Link from "next/link"
import SigningButton from "./SigningButton"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const AppBarNav = () => {
  return (
    <div> 
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/"> Home </Link>
            <Link href="/dashboard">Dashboard</Link>
          </Typography>
          <SigningButton />
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    
  )
}

export default AppBarNav