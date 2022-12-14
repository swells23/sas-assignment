import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import data from '../../../data/mock-data.json';
import { ManageBusinessContextFilter, ManageBusinessContextForm, ManageBusinessContextTable } from '../';
import styles from './ManageBusinessContext.styles';

const ManageBusinessContext = () => {
    const dataMap = new Map(data.map(item => [item.id, item])),
        [businessContextData, setBusinessContextData] = useState(dataMap),
        [selectedRecords, setSelectedRecords] = useState(new Set()),
        [form, setForm] = useState(null),
        [filteredData, setFilteredData] = useState(null);

    return (
        <Container sx={styles.root}>
            <Typography variant='h5'>Manage Business Contexts</Typography>
            <Typography variant='h6'>Create or modify a business context.</Typography>
            {(form === 'add' || form === 'edit') && (<ManageBusinessContextForm
                data={businessContextData}
                setData={setBusinessContextData}
                selectedRecords={selectedRecords}
                form={form}
                setForm={setForm}
            />)}
            <ManageBusinessContextTable
                data={businessContextData}
                setData={setBusinessContextData}
                filteredData={filteredData}
                selectedRecords={selectedRecords}
                setSelectedRecords={setSelectedRecords}
                form={form}
                setForm={setForm}
            >
                <ManageBusinessContextFilter data={businessContextData} setFilteredData={setFilteredData} />
            </ManageBusinessContextTable>
        </Container>
    );
};

export default ManageBusinessContext;