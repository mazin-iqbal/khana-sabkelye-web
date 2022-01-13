import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from "react-router-dom";
// import LogoutIcon from '@mui/icons-material/Logout';


const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#228B22',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function PermanentDrawer() {
    let navigate = useNavigate();

    const itemsList = [
        {
          text: "Pending",
          icon: <PendingActionsIcon />,
          onClick: () => navigate("/admin/pending")
        },
        {
          text: "Approved",
          icon: <AssignmentTurnedInIcon />,
          onClick: () => navigate("/admin/approved")
        },
        {
          text: "Rejected",
          icon: <ThumbDownAltIcon />,
          onClick: () => navigate("/admin/rejected")
        },
       
      ];

      const createBM = [
        {
          text: "Create Branch Manager",
          icon: <AddBoxIcon />,
          onClick: () => navigate("/admin/createbranchmanager")
        }
      ]


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        color="primary"
        position="fixed"
        sx={{ width: "100%",
        zIndex: 1,

          // `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` 
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Portal
          </Typography>
        </Toolbar>
        {/* <LogoutIcon/> */}
      </AppBar>


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex:0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />

        <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
             {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary ={text}/>
            </ListItem>
            );
        })}
        </List>

        <Divider />
        <List>
        {createBM.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
             {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary ={text}/>
            </ListItem>
            );
        })}
        </List>
        </Drawer>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
    </Box>
    </ThemeProvider>
  );
}

export default PermanentDrawer;