import {
  Box, Container, Typography, Button, Chip, Stack,
  Paper, Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { alpha } from "../../theme/muiTheme";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "15+", label: "Technologies" },
  { value: "3+", label: "Years Learning" },
];

const tags = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "REST APIs"];

export default function About() {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
            Who I Am
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>About Me</Typography>
          <Box sx={{ mx: "auto", width: 56, height: 4, borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` }} />
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 8, alignItems: "center" }}>
          {/* Text */}
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
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

            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
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
            </Stack>

            <Button variant="contained" href="#contact">Let&apos;s Connect</Button>
          </Box>

          {/* Stats */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            {stats.map((s) => (
              <Paper
                key={s.label}
                elevation={0}
                sx={{
                  p: 3, textAlign: "center", borderRadius: 4,
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
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {s.label}
                </Typography>
              </Paper>
            ))}
            {/* 3rd stat centered */}
            <Paper
              elevation={0}
              sx={{
                p: 3, textAlign: "center", borderRadius: 4, gridColumn: "1 / -1",
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
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                87%
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Prompt Engineering Proficiency
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
