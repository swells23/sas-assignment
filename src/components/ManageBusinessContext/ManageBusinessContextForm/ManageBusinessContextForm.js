import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ManageBusinessContextForm = ({ data, setData }) => {
    const [addRecord, setAddRecord] = useState({
        description: '',
        externalCode: '',
        lastModifiedDate: '',
        name: ''
    });

    const handleAddRecord = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name'),
            fieldValue = event.target.value,
            updatedData = { ...addRecord, [fieldName]: fieldValue };

        setAddRecord(updatedData);
    }

    const handleAddRecordSubmit = (event) => {
        event.preventDefault();

        const newBusinessContextData = [...data, addRecord];

        setData(newBusinessContextData);
    }

    return (
        <Box component='form' onSubmit={handleAddRecordSubmit}>
            <div>
                <TextField id='bc-name' name='name' placeholder='Name' onChange={handleAddRecord} required />
                <TextField id='bc-description' name='description' placeholder='Description' onChange={handleAddRecord} required />
                <TextField id='bc-external-code' name='externalCode' placeholder='Code' onChange={handleAddRecord} required />
                <TextField id='bc-date-modified' name='lastModifiedDate' placeholder='Date Modified' onChange={handleAddRecord} required />
            </div>
            <Button type='submit'>Add</Button>
        </Box>
    );
}

export default ManageBusinessContextForm;