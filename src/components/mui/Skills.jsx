import {
  Box, Container, Typography, Paper, LinearProgress, Chip, Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import { alpha } from "../../theme/muiTheme";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🖥",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs", level: 80 },
      { name: "SQL / NoSQL", level: 65 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vite / Webpack", level: 78 },
      { name: "Docker (basics)", level: 55 },
      { name: "Figma / Design", level: 65 },
    ],
  },
];

const promptTags = ["GPT-4", "Claude", "Chain-of-Thought", "RAG", "LLM Fine-tuning"];

const GradientProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 8,
  backgroundColor: theme.palette.mode === "dark"
    ? "rgba(255,255,255,0.08)"
    : theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    borderRadius: 8,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

function SkillBar({ name, level }) {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.75 }}>
        <Typography variant="body2" fontWeight={500}>{name}</Typography>
        <Typography variant="body2" color="primary" fontWeight={600}>{level}%</Typography>
      </Box>
      <GradientProgress variant="determinate" value={level} />
    </Box>
  );
}

export default function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
            What I Know
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>My Skills</Typography>
          <Box sx={{ mx: "auto", width: 56, height: 4, borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` }} />
        </Box>

        {/* ── Featured Skill ── */}
        <Paper
          elevation={0}
          sx={{
            mb: 4, p: 4, borderRadius: 4, position: "relative", overflow: "hidden",
            border: "2px solid transparent",
            background: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box,
                         linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box`,
            boxShadow: `0 0 32px ${alpha(theme.palette.primary.main, 0.15)}`,
          }}
        >
          {/* Background glow */}
          <Box sx={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse at top left, ${alpha(theme.palette.primary.main, 0.06)}, transparent 70%)`,
          }} />

          <Box sx={{ position: "relative", zorder: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, flexWrap: "wrap", gap: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <StarIcon sx={{ color: "primary.main", fontSize: 16 }} />
                <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
                  Featured Skill
                </Typography>
              </Stack>
              <Chip
                label="Expert"
                size="small"
                sx={{ bgcolor: "primary.main", color: "#fff", fontWeight: 700, fontSize: "0.7rem" }}
              />
            </Box>

            <Typography variant="h4" fontWeight={800} sx={{ mb: 1.5 }}>
              Prompt Engineering
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" color="text.secondary">Proficiency</Typography>
              <Typography variant="body2" color="primary" fontWeight={700}>87%</Typography>
            </Box>
            <GradientProgress variant="determinate" value={87} sx={{ mb: 2.5, height: 10 }} />

            <Typography
              variant="body2"
              color="text.secondary"
              fontStyle="italic"
              sx={{ mb: 2.5 }}
            >
              &ldquo;I don&apos;t just use AI — I speak its language fluently.&rdquo;
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {promptTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    color: "primary.main",
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Skill category cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {skillCategories.map((cat) => (
            <Paper
              key={cat.category}
              elevation={0}
              sx={{
                p: 4, borderRadius: 4,
                border: `1px solid ${theme.palette.divider}`,
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.12)}`,
                },
              }}
            >
              <Typography variant="h4" sx={{ mb: 0.5 }}>{cat.icon}</Typography>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>{cat.category}</Typography>
              <Stack spacing={2.5}>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
