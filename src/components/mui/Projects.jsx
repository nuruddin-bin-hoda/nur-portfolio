import {
  Box, Container, Typography, Card, CardContent, CardActions,
  Chip, Button, Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "../../theme/muiTheme";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, Vite, and Tailwind CSS. Fully responsive with smooth animations and a modern design.",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/nuruddin-bin-hoda/nur-portfolio",
    featured: true,
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management application with CRUD operations, user authentication, and real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/nuruddin-bin-hoda",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that fetches real-time data from a public API and displays it with clean charts and animations.",
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/nuruddin-bin-hoda",
    featured: false,
  },
  {
    title: "E-Commerce UI",
    description: "A modern e-commerce front-end with product listings, cart functionality, and responsive layout.",
    tags: ["React", "Tailwind CSS", "Redux"],
    github: "https://github.com/nuruddin-bin-hoda",
    featured: false,
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog platform with dynamic routing, syntax highlighting, and SEO optimizations.",
    tags: ["React", "Node.js", "Markdown"],
    github: "https://github.com/nuruddin-bin-hoda",
    featured: false,
  },
  {
    title: "Chat Application",
    description: "A real-time chat app with WebSocket support, rooms, and typing indicators.",
    tags: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/nuruddin-bin-hoda",
    featured: false,
  },
];

function ProjectCard({ project }) {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%", display: "flex", flexDirection: "column",
        border: `1px solid ${theme.palette.divider}`,
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-4px)",
          boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.12)}`,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {project.featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              mb: 1.5,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: "primary.main",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
              fontWeight: 600, fontSize: "0.7rem",
            }}
          />
        )}
        <Typography variant="h6" fontWeight={700} gutterBottom>{project.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
          {project.description}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.8}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: "action.hover",
                color: "text.secondary",
                fontSize: "0.7rem",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 3 }}>
        <Button
          size="small"
          startIcon={<GitHubIcon fontSize="small" />}
          href={project.github}
          target="_blank"
          rel="noreferrer"
          sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Projects() {
  const theme = useTheme();

  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>My Work</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>Projects</Typography>
          <Box sx={{ mx: "auto", width: 56, height: 4, borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` }} />
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3,1fr)" }, gap: 3 }}>
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            href="https://github.com/nuruddin-bin-hoda"
            target="_blank"
            rel="noreferrer"
            sx={{ borderColor: "divider", color: "text.primary", "&:hover": { borderColor: "primary.main", color: "primary.main" } }}
          >
            View All on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
