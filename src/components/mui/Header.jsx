import { useState } from "react";
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Drawer, List, ListItemButton, ListItemText,
  useScrollTrigger, Container, Divider, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../../context/ThemeContext";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { alpha } from "../../theme/muiTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled
            ? alpha(muiTheme.palette.background.default, 0.85)
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${muiTheme.palette.divider}`
            : "none",
          transition: "all 0.3s ease",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5, justifyContent: "space-between" }}>
            {/* Brand */}
            <Typography
              component="a"
              href="#home"
              variant="h5"
              fontWeight={900}
              sx={{ textDecoration: "none", color: "inherit", letterSpacing: 2 }}
            >
              N<Box component="span" sx={{ color: "primary.main" }}>.</Box>
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  color="inherit"
                  size="small"
                  sx={{ fontWeight: 500, color: "text.secondary", "&:hover": { color: "text.primary" } }}
                >
                  {link.label}
                </Button>
              ))}

              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{
                  ml: 1,
                  border: `1px solid ${muiTheme.palette.divider}`,
                  borderRadius: 2,
                  color: "text.secondary",
                  "&:hover": { color: "primary.main", borderColor: "primary.main" },
                }}
              >
                {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>

              <Button variant="contained" href="#contact" size="small" sx={{ ml: 1 }}>
                Hire Me
              </Button>
            </Box>

            {/* Mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{ border: `1px solid ${muiTheme.palette.divider}`, borderRadius: 2, color: "text.secondary" }}
              >
                {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: "background.default", px: 2, py: 2 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight={800}>
            N<Box component="span" sx={{ color: "primary.main" }}>.</Box>
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List disablePadding>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" fullWidth href="#contact" onClick={() => setDrawerOpen(false)}>
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
