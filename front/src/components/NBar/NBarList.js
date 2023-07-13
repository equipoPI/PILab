//componentes
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

//Iconos 

export default function NBarList({ nLinks, NavLink, setOpen }) {
  return (
    <Box sx={{ width: 250, bgcolor: "background.paper" }}>
      <nav>
        <List>
          {
            nLinks.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText>
                    {item.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
  );
}