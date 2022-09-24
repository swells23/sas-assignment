import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import data from '../../../data/mock-data.json';
import { ManageBusinessContextForm, ManageBusinessContextTable } from '../';

const ManageBusinessContext = () => {
    const [businessContextData, setBusinessContextData] = useState(data);

    return (
        <Container>
            <Typography variant='h5'>Manage Business Contexts</Typography>
            <Typography variant='h6'>Create or modify a business context.</Typography>
            <ManageBusinessContextForm data={businessContextData} setData={setBusinessContextData} />
            <ManageBusinessContextTable data={businessContextData} />
        </Container>
    );
};

export default ManageBusinessContext;