import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AccountCircleIcon,
  InboxOutlined,
  MenuIcon,
} from "@mui/icons-material";
import {
  Toolbar,
  Box,
  AppBar,
  Button,
  IconButton,
  Avatar,
  MenuItem,
  Typography,
  Paper,
  Stack,
  Container,
  Tooltip,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const appbar = (
    <div>
      <Stack direction="row" spacing={2} sx={{ marginX: "auto" }}>
        <Grid>
          <ListItemButton href="/home">
            <ListItemText primary="หน้าแรก" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton href="/cows_event">
            <ListItemText primary="กิจกรรมวัว" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton href="/farm_details">
            <ListItemText primary="รายละเอียดฟาร์ม" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton href="/Profile">
            <ListItemText primary="ข้อมูลส่วนตัว" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton  >
            <ListItemText primary="ออกจากระบบ" />
          </ListItemButton>
        </Grid>
        <Grid 
        sx={{minWidth:400}} align="right">
          <Typography sx={{mt:2}}>ชื่อผู้ใช้ :</Typography>
        </Grid>
      </Stack>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: 50,
          boxShadow: "none",
          zIndex: 0,
          backgroundColor: "#282c34",
          textAlign: "center",
        }}
      >
        {appbar}
      </AppBar>
    </>
  );
}
