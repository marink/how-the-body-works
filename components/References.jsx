import { Typography, Box } from '@mui/material';

export default function References({ items = [] }) {
    if (!items.length) return null;

    return (
        <>
            <Typography id="references" component="h1" variant="h1" gutterBottom sx={{ mt: 5 }}>
                References
            </Typography>
            <Box component="ol" sx={{ pl: 2.5, m: 0 }}>
                {items.map(({ n, authors, title, journal, year, url }) => (
                    <Box
                        key={n}
                        id={`ref-${n}`}
                        component="li"
                        sx={{ fontSize: '0.85rem', lineHeight: 1.6, mb: 1, color: 'text.secondary' }}
                    >
                        {authors} ({year}).{' '}
                        <em>{title}</em>
                        {journal ? `. ${journal}` : ''}.{' '}
                        <a href={url} target="_blank" rel="noopener noreferrer"
                           style={{ color: '#1565C0' }}>
                            {url}
                        </a>
                    </Box>
                ))}
            </Box>
        </>
    );
}
