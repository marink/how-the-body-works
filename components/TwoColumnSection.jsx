import Box from '@mui/material/Box';

export default function TwoColumnSection({ figure, children, reversed = false }) {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 3, md: 5 },
            alignItems: 'center',
            mb: 7,
        }}>
            {reversed ? (
                <>
                    <Box sx={{ order: { xs: 2, md: 1 } }}>{children}</Box>
                    <Box sx={{
                        order: { xs: 1, md: 2 },
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.09), 0 1px 6px rgba(0,0,0,0.06)',
                        overflow: 'hidden',
                    }}>{figure}</Box>
                </>
            ) : (
                <>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.09), 0 1px 6px rgba(0,0,0,0.06)',
                        overflow: 'hidden',
                    }}>{figure}</Box>
                    <Box>{children}</Box>
                </>
            )}
        </Box>
    );
}
