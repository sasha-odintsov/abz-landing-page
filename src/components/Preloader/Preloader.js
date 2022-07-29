import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Preloader() {
    return (
        <Box sx={{ position: 'absolute', left: '0', right: '0', m: 'auto' }}>
            <CircularProgress color='primary' size='48px' />
        </Box>
    )
}

export default Preloader;