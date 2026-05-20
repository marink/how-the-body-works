"use client";

import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function FloatingTOC({ toc = [] }) {
  const [activeId, setActiveId] = useState(toc[0]?.id ?? '');

  useEffect(() => {
    if (!toc.length) return;
    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.find(e => e.isIntersecting);
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: '-10% 0% -70% 0%', threshold: 0 },
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;

  return (
    <Box sx={{
      display: { xs: 'none', lg: 'block' },
      width: 200,
      flexShrink: 0,
      position: 'sticky',
      top: 80,
      alignSelf: 'flex-start',
      pt: 2,
      pl: 3,
    }}>
      <Typography sx={{
        fontSize: 10,
        fontWeight: 700,
        color: 'rgba(0,0,0,0.32)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        mb: 1.5,
      }}>
        On this page
      </Typography>
      {toc.map(({ id, label, level = 1 }) => (
        <Box
          key={id}
          component="a"
          href={`#${id}`}
          onClick={e => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          sx={{
            display: 'block',
            fontSize: 13,
            py: 0.4,
            pl: level === 2 ? 3 : 1.5,
            textDecoration: 'none',
            borderLeft: '2px solid',
            borderColor: activeId === id ? '#1565C0' : 'transparent',
            color: activeId === id ? '#1565C0' : 'rgba(0,0,0,0.55)',
            fontWeight: activeId === id ? 600 : 400,
            transition: 'color 0.15s, border-color 0.15s',
            '&:hover': { color: '#1d1d1f' },
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  );
}
