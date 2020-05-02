import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    box: {
        width: 200,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        boxShadow: '1px 3px 3px 1px rgba(200, 200, 255, .2)'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    expansionHeading: {
        fontSize: 14,
    },
    expansionBar: {
        
    },
    scrollDiv: {
        overflowY: "auto",
        maxWidth: 200,
        width: "fit-content",
        height: 250,
    },
    formControl: {
        margin: 8,
        minWidth: 190,
    }
  });

function AdvancedSearch(props) {
    const classes = useStyles();

    //Hardcoded companyList for now, but later should be routed from backend of a list of supported companies
    const companyList = ['A&F', 'Adidas', 'Aritzia', 'Banana Republic', 'Frank and Oak', 'Gap', 'H&M', 'Hollister'];

    //using the array of supported companies, create the state object to pass to React.useState(-);
    var companyObject = {}
    for(var i = 0; i < companyList.length; i++){
        companyObject[companyList[i]] = true
    }

    //useState Hooks START
    //useState for company filter object... ex. {nike: true, adidas: false, ...}
    const [companyFilter, setCompanyFilter] = React.useState(companyObject);

    //useState for sort type from selection dropdown... ex. 'Recent', 'Rating - High to Low, etc.
    const [sortType, setSortType] = React.useState('Recent');
    
    //handle functions START
    //change handler for sortType: sets the sortType state to the MenuItem value selected
    const handleChangeSortType = (event) => {
      setSortType(event.target.value);
    };

    //change handler for companyFilter: sets the company boolean using the Checkbox change event
    const handleChangeCompanyFilter = (event) => {
        setCompanyFilter({ ...companyFilter, [event.target.name]: event.target.checked });
      };

    //Create JSX elements in a companyFilterList array to insert into the React return statement for the filter list part of the component
    const companyFilterList = companyList.map((company) => {
        return(
            <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={companyFilter[company]} onChange={handleChangeCompanyFilter} name= {company} />}
                        label= {company}
                    />
            </FormGroup>
        )
    })


    //Start React return
    return(
        <Box className={classes.box} borderRadius={8} bgcolor="#FBF8FC">
            <Typography className={classes.title}>
                Advanced Search
            </Typography>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="select-label">Sort By</InputLabel>
                        <Select
                            className={classes.expansionHeading}
                            labelId="select-label"
                            id="simple-select"
                            value={sortType}
                            onChange={handleChangeSortType}
                        >
                            <MenuItem value={'Recent'}>Recent</MenuItem>
                            <MenuItem value={'Rating - High to Low'}>Rating - High to Low</MenuItem>
                            <MenuItem value={'Rating - Low to High'}>Rating - Low to High</MenuItem>
                            <MenuItem value={'Price - High to Low'}>Price - High to Low</MenuItem>
                            <MenuItem value={'Price - Low to High'}>Price - Low to High</MenuItem>
                        </Select>
                </FormControl>
            </div>  
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panelCompanyFilter-content"
                        id="panelCompanyFilter-header"
                    >
                        <Typography className={classes.expansionHeading}>Filter Companies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <div className={classes.scrollDiv}>
                            {companyFilterList}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Box>
    )
}

export default AdvancedSearch;