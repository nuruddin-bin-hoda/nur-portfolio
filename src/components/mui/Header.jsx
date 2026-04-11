import { useState } from "react";
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Collapse, List, ListItemButton, ListItemText,
  useScrollTrigger, Container, Divider, Typography,
} from "@mui/material";
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

/* Animated hamburger → X icon */
function HamburgerIcon({ open }) {
  const muiTheme = useMuiTheme();
  const color = muiTheme.palette.text.primary;

  const barBase = {
    display: "block",
    width: 22,
    height: 2,
    borderRadius: 2,
    backgroundColor: color,
    transformOrigin: "center",
    transition: "transform 0.3s ease, opacity 0.3s ease, top 0.3s ease",
    position: "absolute",
    left: 0,
  };

  return (
    <Box sx={{ width: 22, height: 16, position: "relative" }}>
      {/* Top bar */}
      <Box
        component="span"
        sx={{
          ...barBase,
          top: open ? "50%" : 0,
          transform: open ? "translateY(-50%) rotate(45deg)" : "none",
        }}
      />
      {/* Middle bar */}
      <Box
        component="span"
        sx={{
          ...barBase,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: open ? 0 : 1,
          transform: open ? "translateY(-50%) scaleX(0)" : "translateY(-50%) scaleX(1)",
        }}
      />
      {/* Bottom bar */}
      <Box
        component="span"
        sx={{
          ...barBase,
          top: open ? "50%" : "100%",
          transform: open ? "translateY(-50%) rotate(-45deg)" : "translateY(-100%)",
        }}
      />
    </Box>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  const bgColor = alpha(
    muiTheme.palette.background.default,
    scrolled || menuOpen ? 0.95 : 0.8
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: bgColor,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${
          scrolled || menuOpen ? muiTheme.palette.divider : "transparent"
        }`,
        transition: "background-color 0.3s, border-color 0.3s",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar
          disableGutters
          sx={{ minHeight: { xs: 56, md: 64 }, justifyContent: "space-between" }}
        >
          {/* Brand */}
          <Typography
            component="a"
            href="#home"
            variant="h5"
            fontWeight={900}
            onClick={() => setMenuOpen(false)}
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
                sx={{
                  fontWeight: 500,
                  color: "text.secondary",
                  "&:hover": { color: "text.primary", bgcolor: "action.hover" },
                }}
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
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1.5 }}>
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
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              disableRipple
              sx={{
                p: 0.75,
                borderRadius: 2,
                border: `1px solid ${menuOpen ? muiTheme.palette.primary.main : muiTheme.palette.divider}`,
                color: menuOpen ? "primary.main" : "text.primary",
                transition: "border-color 0.3s, color 0.3s",
                "&:hover": { bgcolor: alpha(muiTheme.palette.primary.main, 0.06) },
              }}
            >
              <HamburgerIcon open={menuOpen} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* ── Top-down dropdown (mobile only) ── */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Collapse in={menuOpen} timeout={300}>
          <Box
            sx={{
              bgcolor: alpha(muiTheme.palette.background.default, 0.97),
              backdropFilter: "blur(20px)",
              borderTop: `1px solid ${muiTheme.palette.divider}`,
              px: 2,
              pb: 2,
              pt: 1,
            }}
          >
            <List disablePadding>
              {navLinks.map((link, i) => (
                <ListItemButton
                  key={link.href}
                  component="a"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    px: 2,
                    mb: 0.5,
                    animationDelay: `${i * 40}ms`,
                    "&:hover": { bgcolor: alpha(muiTheme.palette.primary.main, 0.06) },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ fontWeight: 600, color: "text.primary", fontSize: "1rem" }}
                  />
                </ListItemButton>
              ))}
            </List>

            <Divider sx={{ my: 1.5 }} />

            <Button
              variant="contained"
              fullWidth
              href="#contact"
              size="large"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Button>
          </Box>
        </Collapse>
      </Box>
    </AppBar>
  );
}
