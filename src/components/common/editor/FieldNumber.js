import React from 'react';
import PropTypes from "prop-types";
import {
    InputNumber
} from 'antd';

export default class FieldNumber extends React.Component{
    static propTypes = {
        value:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        onChange:PropTypes.func.isRequired,
        invalidValue:PropTypes.number,
    }

    static defaultProps = {
        invalidValue:0,
    }

    handleChange = (value)=>{
        if(value === undefined){
            value = this.props.invalidValue;
        }

        this.props.onChange(value);
    }

    render(){
        return (
            <InputNumber
                {...this.props}
                onChange={this.handleChange}
            />
        )
    }
}