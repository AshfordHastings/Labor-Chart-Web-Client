import React, { Component } from 'react';

class Cell extends Component {
    /*
    props:
        selected
        editable
        onValueChange
        validateCell
        value
    */
    state = {
        cellValue: this.props.value,
        selected: false
    }

    onCellChange = (event) => {
        this.setState({
            cellValue: event.target.value,
            selected: this.state.selected
        });
    }

    onKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.props.validateCell(this.state.cellValue);
        }
    }

    onStaticCellClick = (event) => {
        if(this.props.editable) {
            this.setState({
                cellValue: this.state.cellValue,
                selected: true
            })
        }
    }

    render() {
        if(this.props.selected) {
            return (
                <div 
                    className='selected-cell'
                    onChange={this.onCellChange}
                    onKeyPress={this.onKeyPress}
                >
                    {this.state.value}
                </div>
            );
        } else {
            return (
                <div 
                    className='non-selected-cell'
                    onCellClick={this.onStaticCellClick}
                >
                    {this.props.value}
                </div>
            );
        }


    }
}

export default Cell;