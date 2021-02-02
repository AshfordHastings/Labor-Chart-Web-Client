import React, { Component } from 'react';
import Cell from './Cell'


class Position extends Component {
    render() {
        /*
            props: position, laborSlots

            Position name
            StartTime
            EndTime
            Hours
            MTWThF laborers
        */
        getEndTime = (string, length) => {
            time = time.split(':');
            var newHour = time[0] + length;
            return newHour + time[1];
        }

        const cells = [];
        
        cells.push(
            
            <Cell // Position name
                editable={false}
                value={this.props.position.name}
            />,

            <Cell // StartTime
                editable={false}
                value={this.props.position.stringTime}
            />,

            <Cell // EndTime
            editable={false}
            value={getEndTime(this,props.stringTime, this.props.length)}
            />

        )


        return(
            <div>{cells}</div>
        );
    }

}

export default Position;
