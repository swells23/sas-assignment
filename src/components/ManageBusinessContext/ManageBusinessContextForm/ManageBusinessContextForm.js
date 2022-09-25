import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ManageBusinessContextForm = ({ data, setData, selectedRecords, form }) => {
    const [addRecord, setAddRecord] = useState({
        description: '',
        externalCode: '',
        id: '',
        lastModifiedDate: '',
        name: ''
    }),
        id = selectedRecords.values().next()?.value,
        originalData = id ? data.get(id) : null;

    const getTextFieldChangeHandler = () => {
        if (form === 'add') {
            return handleAddRecord;
        } else if (form === 'edit') {
            return handleEditRecord;
        }

        return null;
    }

    const handleAddRecord = (evt) => {
        evt.preventDefault();

        const fieldName = evt.target.getAttribute('name'),
            fieldValue = evt.target.value,
            updatedData = { ...addRecord, [fieldName]: fieldValue };

        setAddRecord(updatedData);
    }

    const handleEditRecord = (evt) => {
        evt.preventDefault();

        const fieldName = evt.target.getAttribute('name'),
            fieldValue = evt.target.value,
            updatedData = { ...originalData, [fieldName]: fieldValue };

        setAddRecord(updatedData);
    }

    const handleRecordSubmit = (evt) => {
        evt.preventDefault();

        const newBusinessContextData = new Map(data);

        newBusinessContextData.set(addRecord.id, addRecord)
        setData(newBusinessContextData);
    }

    return (
        <Box component='form' onSubmit={handleRecordSubmit}>
            <div>
                <TextField
                    id='bc-name'
                    name='name'
                    placeholder='Name'
                    onChange={getTextFieldChangeHandler()}
                    defaultValue={originalData?.name}
                    required
                />
                <TextField
                    id='bc-description'
                    name='description'
                    placeholder='Description'
                    onChange={getTextFieldChangeHandler()}
                    defaultValue={originalData?.description}
                    required
                />
                <TextField
                    id='bc-external-code'
                    name='externalCode'
                    placeholder='Code'
                    onChange={getTextFieldChangeHandler()}
                    defaultValue={originalData?.externalCode}
                    required
                />
                <TextField
                    id='bc-date-modified'
                    name='lastModifiedDate'
                    placeholder='Date Modified'
                    onChange={getTextFieldChangeHandler()}
                    defaultValue={originalData?.lastModifiedDate}
                    required
                />
                <TextField
                    id='bc-id'
                    name='id'
                    placeholder='Id'
                    onChange={getTextFieldChangeHandler()}
                    defaultValue={originalData?.id}
                    required
                />
            </div>
            <Button type='submit'>Submit</Button>
        </Box>
    );
}

export default ManageBusinessContextForm;