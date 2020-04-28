import React from 'react'
import "./AdvancedSearch.css";
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


function AdvancedSearch(props) {

    const [sortType, setSortType] = React.useState('Recent');
  
    const handleChange = (event) => {
      setSortType(event.target.value);
    };

    return(
        <div>
            <FormControl className='formControl'>
                <InputLabel id="select-label">Sort By</InputLabel>
                    <Select
                        labelId="select-label"
                        id="simple-select"
                        value={sortType}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Recent'}>Recent</MenuItem>
                        <MenuItem value={'Rating - High to Low'}>Rating - High to Low</MenuItem>
                        <MenuItem value={'Rating - Low to High'}>Rating - Low to High</MenuItem>
                        <MenuItem value={'Price - High to Low'}>Price - High to Low</MenuItem>
                        <MenuItem value={'Price - Low to High'}>Price - Low to High</MenuItem>
                    </Select>
            </FormControl>
        </div>
    )
}

export default AdvancedSearch;