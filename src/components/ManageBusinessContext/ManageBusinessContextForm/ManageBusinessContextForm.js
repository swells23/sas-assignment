import { Box, Button, FormControl, Grid, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { getCurrentDate } from '../../../utilities/getCurrentDate';
import styles from './ManageBusinessContextForm.styles';

const ManageBusinessContextForm = ({ data, setData, selectedRecords, form, setForm }) => {
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
            fieldValue = evt.target.value;

        setAddRecord({ ...originalData, [fieldName]: fieldValue });
    }

    const handleRecordSubmit = (evt) => {
        evt.preventDefault();

        const newBusinessContextData = new Map(data);

        newBusinessContextData.set(addRecord.id, { ...addRecord, lastModifiedDate: getCurrentDate() })
        setData(newBusinessContextData);
    }

    const closeForm = () => {
        setForm(null)
    }

    return (
        <Box sx={styles.root}>
            <CloseIcon aria-label='close form' sx={styles.closeBtn} onClick={closeForm} />
            <Grid aria-label='business-context-form'
                container
                component='form'
                sx={styles.form}
                onSubmit={handleRecordSubmit}
            >
                <Grid item xs={12} md={4}>
                    <TextField
                        aria-label='manage-name'
                        id='bc-name'
                        name='name'
                        label='Name'
                        onChange={getTextFieldChangeHandler()}
                        defaultValue={originalData?.name}
                        size='small'
                        required
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        aria-label='manage-id'
                        id='bc-id'
                        name='id'
                        label='Id'
                        onChange={getTextFieldChangeHandler()}
                        defaultValue={originalData?.id}
                        size='small'
                        required
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        aria-label='manage-external-code'
                        id='bc-external-code'
                        name='externalCode'
                        label='Code'
                        onChange={getTextFieldChangeHandler()}
                        defaultValue={originalData?.externalCode}
                        size='small'
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            aria-label='manage-description'
                            id='bc-description'
                            name='description'
                            label='Description'
                            onChange={getTextFieldChangeHandler()}
                            defaultValue={originalData?.description}
                            size='small'
                            required
                        />
                    </FormControl>
                </Grid>
                <Button aria-label='submit-business-context' type='submit' variant='contained'>Submit</Button>
            </Grid >
        </Box>
    );
}

export default ManageBusinessContextForm;