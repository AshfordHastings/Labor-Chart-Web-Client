import React, { Component } from 'react';
import LaborSlot from './Position';

class Table extends Component {
    state = {
        positions = [],
        laborSlots = []
    }

    getLaborSlotsFromPosition = (position) => {
        this.props.getLaborSlotsFromPosition(position);
    }

    render() {
        const rows = [];
        for(let i = 0; i < this.props.positions.length; i++) {
            rows.push(
                <LaborSlot 
                    position={this.positions.length}
                    slots={getLaborSlotsFromPosition(this.positions[i])} 
                />
            )
        }
        
        return(
            <div>{rows}</div>

        );
    }

    /*
    laborSlot = {
        dayOfWeek:
        position:
        TimeSlot:
        Cooper:
    }
}