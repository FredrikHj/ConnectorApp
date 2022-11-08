// Import Material UI
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2'
import { ButtonGroup, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const gruidItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
const footerItem = styled(Paper)(({ theme }) => ({
    marginBottom: '0px',
}));

// Exports styling
export const muiSurface = {
    Paper
}
export const muiLayot = {
    Box,
    Container,
    Grid2
}

export const muiHelperObj = {
    gruidItem,
    footerItem
}

export const muiComponents = {
    ButtonGroup,
    Button,
    TableStyling: {
        TableBody, 
        TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell
    },
}

export const muiCSS = {
    styled,
    Typography
}