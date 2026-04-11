import {
  Box, Container, Typography, Button, Chip,
  Stack, Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTheme } from "@mui/material/styles";
import { alpha } from "../../theme/muiTheme";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/" },
  { label: "GitHub", href: "https://github.com/nuruddin-bin-hoda" },
  { label: "X / Twitter", href: "https://x.com/nuruddinbinhoda?t=kmOqMYe2LzkZVrTj8buDWQ&s=09" },
];

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        pt: { xs: "72px", md: "96px" },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Background blobs */}
      <Box sx={{
        position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 600, borderRadius: "50%",
        bgcolor: alpha(theme.palette.primary.main, 0.07), filter: "blur(80px)",
        pointerEvents: "none",
      }} />
      <Box sx={{
        position: "absolute", bottom: 0, right: 0,
        width: 400, height: 400, borderRadius: "50%",
        bgcolor: alpha(theme.palette.secondary.main, 0.06), filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6, alignItems: "center" }}>

          {/* Text */}
          <Box>
            <Chip
              label="Available for Freelance"
              size="small"
              sx={{
                mb: 3, bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.main", fontWeight: 600,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              }}
            />

            <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.8rem" }, mb: 2 }}>
              Hi, I&apos;m{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nuruddin
              </Box>
            </Typography>

            <Typography variant="h6" color="text.secondary" fontWeight={400} sx={{ mb: 4, lineHeight: 1.8 }}>
              A passionate web engineer crafting scalable, performant, and
              user-friendly web applications.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
              <Button variant="contained" size="large" href="#projects" endIcon={<ArrowForwardIcon />}>
                View My Work
              </Button>
              <Button variant="outlined" size="large" href="#contact"
                sx={{ borderColor: "divider", color: "text.primary", "&:hover": { borderColor: "primary.main" } }}
              >
                Get In Touch
              </Button>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {socials.map((s) => (
                <Typography
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  sx={{
                    color: "text.disabled",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                    transition: "color 0.2s",
                  }}
                >
                  {s.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Image card */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ position: "relative", width: { xs: 260, md: 320 }, height: { xs: 260, md: 320 } }}>
              {/* Glow */}
              <Box sx={{
                position: "absolute", inset: 0, borderRadius: 5,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                filter: "blur(24px)", opacity: 0.25,
              }} />
              {/* Photo card */}
              <Paper
                elevation={theme.palette.mode === "dark" ? 0 : 4}
                sx={{
                  position: "relative", width: "100%", height: "100%",
                  borderRadius: 5, overflow: "hidden",
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box
                  component="img"
                  src="nuruddin-img.jpg"
                  alt="Nuruddin"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Watermark */}
                <Typography
                  sx={{
                    position: "absolute", top: 12, left: 16,
                    fontWeight: 900, fontSize: "1.3rem", color: "white",
                    opacity: 0.4, letterSpacing: 1, lineHeight: 1,
                  }}
                >
                  N<Box component="span" sx={{ color: alpha(theme.palette.primary.light, 0.9) }}>.</Box>
                </Typography>
              </Paper>

              {/* Status badge */}
              <Paper
                elevation={4}
                sx={{
                  position: "absolute", bottom: -16, right: -16,
                  px: 2, py: 1, borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="caption" color="text.secondary" display="block">Status</Typography>
                <Stack direction="row" alignItems="center" spacing={0.8}>
                  <FiberManualRecordIcon sx={{ fontSize: 10, color: "success.main" }} />
                  <Typography variant="body2" fontWeight={700} color="success.main">Open to work</Typography>
                </Stack>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Scroll hint — desktop only */}
      <Box sx={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "center", gap: 0.5,
        color: "text.disabled",
        "@keyframes bounce": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(6px)" } },
        animation: "bounce 2s infinite",
      }}>
        <Typography variant="caption" letterSpacing={3} textTransform="uppercase">Scroll</Typography>
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>
    </Box>
  );
}
