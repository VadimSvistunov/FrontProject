import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from './avatar';
import Link from '@mui/material/Link';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import useAuth from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const onLogOut = () => {
    auth.logOut();
    navigate('/login');
  };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
          <Button variant="contained">Home</Button>
          </Link>
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <Button style = {{margin: '10px'}}variant="contained" {...bindTrigger(popupState)}>
            Royalty Free Music 
            </Button>
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
          Sound Effects
          </Button>
          <Menu {...bindMenu(popupState)}>
          <Link href="/sound-effects-for-videos/riser-and-crescendo" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Riser / Crescendo</MenuItem>
            </Link>
            <Link href="/sound-effects-for-videos/boom-and-slam" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Boom / Slam / Impact</MenuItem>
            </Link>
            <Link href="/sound-effects-for-videos/boom-and-slam" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Ambience / Indoor</MenuItem>
            </Link>
            <Link href="/sound-effects-for-videos/ambience-and-outdoor" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Ambience / Outdoor</MenuItem>
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          
          <Link href="/contact" underline="none" color="inherit" >
          <Button color="inherit">Contact</Button>
          </Link>
          </Typography>
          {auth.isLoaded && (auth.user ? ( 
                <>
                  <Link href = "/profile" underline="none" color="inherit" >
                    <Button color="inherit">
                      {/* {auth.user.firstName} {auth.user.lastName} */}
                      <Avatar></Avatar>
                    </Button>
                  </Link>
                  <Button color="inherit" onClick={onLogOut}>
                    Log out
                  </Button>
                </>
                ):(
                <>
                  <Link href="/login" underline="none" color="inherit" >
                    <Button color="inherit">Log in</Button>
                  </Link>
                    <Link href="/registration" underline="none" color="inherit" >
                  <Button color="inherit">Registration</Button>
                  </Link>
                </>
          ))}
          
          <Menu {...bindMenu(popupState)}>
          <Link href="/royalty-free-music/action-and-trailer" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Action / Trailer Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/epic-and-orchestral" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Epic / Orchestral Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/rock-and-energetic" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Indie Rock / Energetic Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/electronic-and-edm" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Electronic / EDM / Synth Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/easy-listening-music" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Easy Listening Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/acoustic-and-piano" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Acoustic / Piano Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/game-music" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Video Game Music</MenuItem>
            </Link>
            <Link href="/royalty-free-music/movie" underline="none" color="inherit" >
            <MenuItem onClick={popupState.close}>Movie / Underscore Music</MenuItem>
            </Link>
          </Menu>
        </React.Fragment>
        
        
      )}
    </PopupState>
    
        </Toolbar>
      </AppBar>
    </Box>

    </>
  );
}