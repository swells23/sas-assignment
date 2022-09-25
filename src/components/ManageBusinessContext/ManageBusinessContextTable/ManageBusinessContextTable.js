import {
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import React from 'react';
import { BUSINESS_CONTEXT_COLUMNS } from '../../../data/templateMeta';

const ManageBusinessContextTable = ({ data, setData, selectedRecords, setSelectedRecords, form, setForm }) => {
    const selectedRecordsSet = new Set(selectedRecords);

    const renderTableHeaders = () => {
        const renderList = [];

        for (const property in BUSINESS_CONTEXT_COLUMNS) {
            renderList.push(<TableCell>{BUSINESS_CONTEXT_COLUMNS[property]}</TableCell>);
        };

        return renderList;
    }

    const renderTableRows = () => {
        const renderList = [];

        data.forEach(item => {
            const tableCells = [];

            for (const property in BUSINESS_CONTEXT_COLUMNS) {
                tableCells.push(<TableCell key={item[property]}>{item[property]}</TableCell>)
            }

            renderList.push(
                <TableRow>
                    <TableCell>
                        <Checkbox onChange={(evt) => handleSelectRecord(item.id, evt)} />
                    </TableCell>
                    {tableCells}
                </TableRow>
            );
        });

        return renderList;
    }

    const handleSelectRecord = (id, evt) => {
        evt.target.checked ? selectedRecordsSet.add(id) : selectedRecordsSet.delete(id);
        console.log(selectedRecordsSet)
        console.log(selectedRecords)
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
        <TableContainer component={Paper}>
            <Button onClick={showAddRecordForm}>Add</Button>
            <Button onClick={showEditRecordForm}>Edit</Button>
            <Button onClick={deleteRecord}>Delete</Button>
            <Table sx={{ minWidth: 650 }} aria-label='business contexts'>
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
    );
};

export default ManageBusinessContextTable;