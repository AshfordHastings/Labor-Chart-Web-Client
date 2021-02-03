import React, { Component } from 'react';
import Cell from './Cell'


class Position extends Component {

    getEndTime = (string, length) => {
        var time = string.split(':');
        var newHour = time[0] + length;
        return newHour + time[1];
    };

    render() {
        /*
            props: position, laborSlots

            Position name
            StartTime
            EndTime
            Hours
            MTWThF laborers
        */


        const cells = [];
        
        cells.push(
            
            <Cell // Position name
                key='name'
                editable={false}
                value={this.props.position.name}
            />,

            <Cell // StartTime
                key='startTime'
                editable={false}
                value={this.props.position.startTime}
            />,
            /*
            <Cell // EndTime
                editable={false}
                value={this.getEndTime(this.props.position.startTime, this.props.position.length)}
            />
            */

        )


        return(
            <div>{cells}</div>
        );
    }

}

export default Position;
