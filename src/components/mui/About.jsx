import {
  Box, Container, Typography, Button, Chip,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { alpha } from "../../theme/muiTheme";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "15+", label: "Technologies" },
  { value: "3+", label: "Years Learning" },
  { value: "87%", label: "Prompt Engineering Proficiency" },
];

const tags = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "REST APIs"];

export default function About() {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 14 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
            Who I Am
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}>
            About Me
          </Typography>
          <Box sx={{
            mx: "auto", width: 56, height: 4, borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          }} />
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 6, md: 8 }, alignItems: "start" }}>
          {/* Text */}
          <Box>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
              A developer who loves building things for the web
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
              I&apos;m Nuruddin Bin Hoda, a web developer passionate about creating clean,
              efficient, and accessible web applications. I enjoy turning complex problems
              into simple, beautiful, and intuitive solutions.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </Typography>

            {/* Chips — Box flex instead of Stack to avoid gap/wrap bugs on mobile */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    color: "primary.main",
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>

            <Button variant="contained" href="#contact">Let&apos;s Connect</Button>
          </Box>

          {/* Stats — 2x2 grid always */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: { xs: 2, md: 3 } }}>
            {stats.map((s) => (
              <Paper
                key={s.label}
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: "background.default",
                  transition: "border-color 0.25s, transform 0.25s",
                  "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)" },
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block", lineHeight: 1.4 }}>
                  {s.label}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
