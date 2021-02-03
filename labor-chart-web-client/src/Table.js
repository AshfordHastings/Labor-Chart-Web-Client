import React, { Component } from 'react';
import LaborSlot from './Position';

class Table extends Component {
    state = {
        positions: this.props.positions,
        laborSlots: []
    }

    getLaborSlotsFromPosition = (position) => {
        this.props.getLaborSlotsFromPosition(position);
    }

    render(props) {
        const rows = [];
        for(let i = 0; i < this.state.positions.length; i++) {
            rows.push(
                <LaborSlot 
                    position={this.state.positions.length}
                    //slots={getLaborSlotsFromPosition(this.positions[i])} 
                />
            )
        }
        
        return(
            <div>{rows}</div>

        );
    }
}

export default Table;