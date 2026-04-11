import { useState } from "react";
import {
  Box, Container, Typography, TextField, Button,
  Paper, Stack, Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { alpha } from "../../theme/muiTheme";

const contactInfo = [
  { icon: <EmailIcon />, label: "Email", value: "nuruddinbinhoda@gmail.com", href: "mailto:nuruddinbinhoda@gmail.com" },
  { icon: <GitHubIcon />, label: "GitHub", value: "nuruddin-bin-hoda", href: "https://github.com/nuruddin-bin-hoda" },
  { icon: <LinkedInIcon />, label: "LinkedIn", value: "nuruddin-bin-hoda", href: "https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/" },
  { icon: <WhatsAppIcon />, label: "WhatsApp", value: "+880 1701-071227", href: "https://wa.me/8801701071227" },
];

export default function Contact() {
  const theme = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>Get In Touch</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>Contact Me</Typography>
          <Box sx={{ mx: "auto", width: 56, height: 4, borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` }} />
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 8 }}>
          {/* Info */}
          <Box>
            <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.9 }}>
              I&apos;m currently open to new opportunities. Whether you have a project, a
              question, or just want to say hi — my inbox is always open!
            </Typography>
            <Stack spacing={2.5}>
              {contactInfo.map((info) => (
                <Paper
                  key={info.label}
                  component="a"
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  elevation={0}
                  sx={{
                    display: "flex", alignItems: "center", gap: 2, p: 2,
                    borderRadius: 3, border: `1px solid ${theme.palette.divider}`,
                    textDecoration: "none", color: "inherit",
                    transition: "border-color 0.2s, transform 0.2s",
                    "&:hover": { borderColor: "primary.main", transform: "translateX(6px)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: 2.5, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: "primary.main",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.disabled" textTransform="uppercase" letterSpacing={1} display="block">
                      {info.label}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>{info.value}</Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              {submitted && (
                <Alert severity="success" sx={{ borderRadius: 3 }}>
                  Message sent! I&apos;ll get back to you soon.
                </Alert>
              )}
              <TextField
                label="Name"
                name="name"
                required
                fullWidth
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                required
                fullWidth
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              <TextField
                label="Message"
                name="message"
                required
                fullWidth
                multiline
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
              />
              <Button type="submit" variant="contained" size="large" fullWidth>
                Send Message
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
