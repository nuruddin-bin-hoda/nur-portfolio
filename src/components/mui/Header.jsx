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
import { useTheme as useMuiTheme, alpha } from "@mui/material/styles";

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

  const bgColor = alpha(muiTheme.palette.background.default, scrolled ? 0.92 : 0.75);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: bgColor,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? muiTheme.palette.divider : "transparent"}`,
          transition: "border-color 0.3s, background-color 0.3s",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 }, justifyContent: "space-between" }}>

            {/* Brand */}
            <Typography
              component="a"
              href="#home"
              variant="h5"
              fontWeight={900}
              sx={{ textDecoration: "none", color: "text.primary", letterSpacing: 2, flexShrink: 0 }}
            >
              N<Box component="span" sx={{ color: "primary.main" }}>.</Box>
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  size="small"
                  sx={{ fontWeight: 500, color: "text.secondary", "&:hover": { color: "text.primary", bgcolor: "action.hover" } }}
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

            {/* Mobile controls */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{
                  border: `1px solid ${muiTheme.palette.divider}`,
                  borderRadius: 2,
                  color: "text.secondary",
                  p: 0.75,
                }}
              >
                {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "text.primary", p: 0.75 }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "min(280px, 85vw)",
            bgcolor: "background.default",
            px: 2,
            pt: 2,
            pb: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight={900}>
            N<Box component="span" sx={{ color: "primary.main" }}>.</Box>
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 1.5 }} />

        <List disablePadding>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              sx={{ borderRadius: 2, mb: 0.5, py: 1.2 }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontWeight: 600, color: "text.primary" }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            fullWidth
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            size="large"
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
