import React from "react";

import {
    computed,
    reaction,
} from "mobx"

import {
    observer
} from "mobx-react"

import propsValidateOptionMixin from "./_propsValidateOptionMixin";

export default function withValidate(validateOption,propMixins){
    return function(Component){
        @propsValidateOptionMixin
        @observer
        class ComponentWithValidate extends React.Component{
            constructor(props){
                super(props);
                this.validateOption = validateOption.bind(this);
                reaction(()=>{
                    return {
                        value:this.props.value,
                        candidate:this.props.candidate
                    }
                },this.validateOption,{
                    fireImmediately:true,
                });
            }

            @computed get allvalueSet(){
                const valuefield = this.props.valuefield;
                return this.props.candidate.reduce((set,item)=>{
                    set.add(item[valuefield]);
                    return set;
                },new Set());
            }
    
            render(){
                return (
                    <Component
                        {...this.props}
                    />
                )
            }
        }

        propMixins.forEach((propMixin)=>{
            propMixin(ComponentWithValidate);
        });

        return ComponentWithValidate;
    }
}