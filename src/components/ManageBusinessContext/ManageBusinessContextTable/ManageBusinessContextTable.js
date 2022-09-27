import {
    Checkbox,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { DeleteOutlined, EditOutlined, PostAddOutlined } from '@mui/icons-material';
import React from 'react';
import { BUSINESS_CONTEXT_COLUMNS } from '../../../data/templateMeta';
import styles from './ManageBusinessContextTable.styles';

const ManageBusinessContextTable = ({
    children,
    data,
    filteredData,
    setData,
    selectedRecords,
    setSelectedRecords,
    form,
    setForm
}) => {
    const selectedRecordsSet = new Set(selectedRecords);

    const renderTableHeaders = () => {
        const renderList = [];

        for (const property in BUSINESS_CONTEXT_COLUMNS) {
            renderList.push(
                <TableCell key={`header-${property}`}>
                    <Typography sx={styles.tableHeaders}>
                        {BUSINESS_CONTEXT_COLUMNS[property]}
                    </Typography>
                </TableCell>);
        };

        return renderList;
    }

    const renderTableRows = () => {
        const renderList = [],
            verifiedData = filteredData || data;

        if (verifiedData.size === 0) {
            return <TableRow>NO RESULTS FOUND</TableRow>;
        }

        verifiedData.forEach(item => {
            const tableCells = [];

            for (const property in BUSINESS_CONTEXT_COLUMNS) {
                tableCells.push(
                    <TableCell key={item[property]}>
                        {item[property]}
                    </TableCell>)
            }

            renderList.push(
                <TableRow>
                    <TableCell>
                        <Checkbox aria-label='select record' onChange={(evt) => handleSelectRecord(item.id, evt)} />
                    </TableCell>
                    {tableCells}
                </TableRow>
            );
        });

        return renderList;
    }

    const handleSelectRecord = (id, evt) => {
        evt.target.checked ? selectedRecordsSet.add(id) : selectedRecordsSet.delete(id);
        setSelectedRecords(selectedRecordsSet);
    }

    const showAddRecordForm = () => {
        form !== 'add' ? setForm('add') : setForm(null);
    }

    const showEditRecordForm = () => {
        form !== 'edit' && selectedRecords.size === 1 ? setForm('edit') : setForm(null);
    }

    const deleteRecord = () => {
        form && setForm(null);

        const newData = new Map(data);
        selectedRecords.forEach(item => {
            newData.delete(item);
        });

        setData(newData);
        setSelectedRecords(new Set());
    }

    return (
        <>
            <Grid container sx={styles.tableControls}>
                <Grid item xs={10}>{children}</Grid>
                <Grid item sx={styles.tableBtnWrapper} xs={2}>
                    <PostAddOutlined aria-label='add record' sx={styles.tableBtn} onClick={showAddRecordForm} />
                    <EditOutlined aria-label='edit record' sx={styles.tableBtn} onClick={showEditRecordForm} />
                    <DeleteOutlined aria-label='delete record' sx={styles.tableBtn} onClick={deleteRecord} />
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label='business contexts'>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            {renderTableHeaders()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageBusinessContextTable;