import Box from '@mui/material/Box';

const MINT   = 'linear-gradient(to right,  rgba(180, 230, 210, 0.55), rgba(180, 230, 210, 0.10))';
const YELLOW = 'linear-gradient(to left,   rgba(255, 230, 100, 0.38), rgba(255, 230, 100, 0.10))';

export default function Section({ children, alt = false }) {
    return (
        <Box sx={{
            background: alt ? MINT : YELLOW,
            mx: { xs: -2, md: -4 },
            px: { xs: 2, md: 4 },
            pt: 1,
            pb: 1.5,
            my: 1.25,
        }}>
            {children}
        </Box>
    );
}
