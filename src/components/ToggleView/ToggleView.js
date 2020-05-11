/*  Developer Notes - Kevin Peng
This React component is not a function component which uses React Hooks to work with states.
It is a classic class-based component with the classic lifecycle management. Other components 
will not be designed in the same way. This is so that I could familiarize myself with both
methods. Code consistency was sacrificed in this instance for the sake of learning.
*/

import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ToggleView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listView: true
        };
    }

    handleListViewChange = () => {
        this.setState( (state) => ({
            listView: !state.listView
        })
        );
    }

    render() {
        return(
            <div>
                <FormControlLabel
                    control={<Switch 
                                color="primary" 
                                checked={this.state.listView}
                                onChange={this.handleListViewChange}
                            />}
                    label="List View"
                    labelPlacement="start"
                />
            </div>
        )
    }
};

export default ToggleView;