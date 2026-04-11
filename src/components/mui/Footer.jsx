import { Box, Container, Typography, Stack, Divider } from "@mui/material";

const year = new Date().getFullYear();

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/" },
  { label: "GitHub", href: "https://github.com/nuruddin-bin-hoda" },
  { label: "X", href: "https://x.com/nuruddinbinhoda?t=kmOqMYe2LzkZVrTj8buDWQ&s=09" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper" }}>
      <Divider />
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ py: 3 }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {year}{" "}
            <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
              Nuruddin Bin Hoda
            </Box>
            . All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            {socials.map((s) => (
              <Typography
                key={s.label}
                component="a"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                  transition: "color 0.2s",
                }}
              >
                {s.label}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
