import React, { Component } from "react";
import ReactJson from "react-json-view";
import '../../styles/App.css';
import '../../styles/material_card.css'
import report from "../../assets/report.json"

class JsonView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...JsonView.defaultProps,
            src: this.getExampleJson()
        };
    }

    static defaultProps = {
        theme: 'shapeshifter:inverted',
        src: null,
        collapsed: false,
        collapseStringsAfter: 15,
        onAdd: false,
        onEdit: false,
        onDelete: false,
        displayObjectSize: false,
        enableClipboard: true,
        indentWidth: 4,
        displayDataTypes: false,
        iconStyle: 'triangle'
    };

    render() {
        var data = require('../../assets/report.json');
        const {
            src,
            collapseStringsAfter,
            onAdd,
            onEdit,
            onDelete,
            displayObjectSize,
            enableClipboard,
            theme,
            iconStyle,
            collapsed,
            indentWidth,
            displayDataTypes
        } = this.state;

        return(
            <div>
                    <ReactJson
                    name={false}
                    name={false}
                    collapsed={collapsed}
                    theme={'monokai'}
                    style={{margin: '2%', fontSize: 16, borderRadius: '4px'}}


                    displayObjectSize={displayObjectSize}
                    enableClipboard={enableClipboard}
                    indentWidth={indentWidth}
                    displayDataTypes={displayDataTypes}
                    iconStyle={iconStyle}

                    src={data}
                />
                
            </div>
        )
    }

    getExampleJson = () => {
        return {
            string: 'this is a test string you bitch',
            integer: 42,
            array: [1, 2, 3, 'test', NaN],
            float: 3.14159,
            undefined: undefined,
            object: {
                'first-child': true,
                'second-child': false,
                'last-child': null
            },
            string_number: '1234',
            date: new Date()
        };
    };
}

export default JsonView;