import { Button, TextField } from '@mui/material';
import React, { useRef } from 'react';

const ManageBusinessContextFilter = ({ data, setFilteredData }) => {
    const filterInput = useRef(null);

    const handleFilter = () => {
        const value = filterInput?.current.value,
            filteredData = new Map();

        if (!value) {
            setFilteredData(null);
        } else {
            for (const item of data.values()) {
                if (item.name.includes(value) ||
                    item.description.includes(value) ||
                    item.externalCode.includes(value) ||
                    item.lastModifiedDate.includes(value)) {
                    filteredData.set(item.id, item);
                }
            }
            setFilteredData(filteredData);
        }
    }

    return (
        <div>
            <TextField
                id='bc-filter'
                name='filter'
                placeholder='Filter'
                inputRef={filterInput}
            />
            <Button onClick={handleFilter}>Filter</Button>
        </div>
    );
};

export default ManageBusinessContextFilter;