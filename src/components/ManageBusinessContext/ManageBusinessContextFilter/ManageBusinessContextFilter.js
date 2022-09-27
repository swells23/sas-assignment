import { Grid, TextField } from '@mui/material';
import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
import React, { useRef } from 'react';
import styles from './ManageBusinessContextFilter.styles';

const ManageBusinessContextFilter = ({ data, setFilteredData }) => {
    const filterInput = useRef(null);

    const handleFilter = (evt) => {
        if (evt.type === 'keyup' && evt.key !== 'Enter')
            return;
        else {
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
    }

    return (
        <Grid sx={styles.root}>
            <TextField
                aria-label='filter'
                id='bc-filter'
                name='filter'
                placeholder='Filter'
                inputRef={filterInput}
                size='small'
                onKeyUp={handleFilter}
            />
            <FilterAltOutlined
                aria-label='filter-submit'
                sx={styles.filterBtn}
                fontSize='large'
                onClick={handleFilter}
            />
        </Grid>
    );
};

export default ManageBusinessContextFilter;