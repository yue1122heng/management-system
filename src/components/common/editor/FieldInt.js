import React from "react";
import PropTypes from "prop-types";

import FieldNumber from "./FieldNumber"

export default class FieldInt extends React.PureComponent{
    static propTypes = {
        value:PropTypes.number.isRequired,
        onChange:PropTypes.func.isRequired,
    }

    handleChange = (value)=>{
        if(!Number.isInteger(value)){
            value = this.props.value;
        }
        this.props.onChange(value);
    }

    render(){
        return (
            <FieldNumber
                {...this.props}
                onChange={this.handleChange}
            />
        )
    }
}
