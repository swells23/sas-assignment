import {
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

const ManageBusinessContextTable = ({ data }) => {
    const renderTableHeaders = () => {
        const renderList = [];

        for (const property in BUSINESS_CONTEXT_COLUMNS) {
            renderList.push(<TableCell>{BUSINESS_CONTEXT_COLUMNS[property]}</TableCell>);
        };

        return renderList;
    }

    const renderTableRows = () => {
        const renderList = data.map(item => {
            const tableCells = [];

            for (const property in BUSINESS_CONTEXT_COLUMNS) {
                tableCells.push(<TableCell key={item[property]}>{item[property]}</TableCell>)
            }

            return (<TableRow>{tableCells}</TableRow>);
        });

        return renderList;
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='business contexts'>
                <TableHead>
                    <TableRow>
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