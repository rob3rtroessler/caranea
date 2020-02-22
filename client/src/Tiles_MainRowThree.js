import React, { Component } from 'react';
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Tiles_MainRowThree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

        // bind click event to render the journal dashboard
        this.renderJournal = this.renderJournal.bind(this);

    }

    componentDidMount() {
    }

    renderJournal(){
        console.log('fired', this.props);
        this.props.parentCallback('journal')
    }


    render() {
        let displayed = this.props.displayed;

        // display only on home dashboard
        if (displayed === 'home'){
            return (
                /* home - journal */
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center journal-card">
                    <div className="align-self-center">
                        <h1 onClick={this.renderJournal} style={{cursor: 'pointer'}}>Journal</h1>
                    </div>
                </Row>
            );
        }
        else if (displayed === 'journal'){
            return (
                /* journal - main journal */
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                    <div className="align-self-center">
                        <h1 onClick={this.renderJournal} style={{cursor: 'pointer'}}>write your daily journal entry here</h1>
                    </div>
                </Row>
            )
        }


    }
}

export default Tiles_MainRowThree;
