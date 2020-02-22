import React, { Component } from 'react';
import * as d3 from "d3";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Tiles_MainRowFour extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

        // bind click event to render the journal dashboard
        this.renderIdeas = this.renderIdeas.bind(this);

    }

    componentDidMount() {
    }

    renderIdeas(){
        console.log('fired', this.props);
        this.props.parentCallback('idea')
    }

    render() {
        let displayed = this.props.displayed;

        // display only on home dashboard
        if (displayed === 'home'){
            return (
                /* home - journal */
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center idea-card">
                    <div className="align-self-center">
                        <h1 onClick={this.renderIdeas} style={{cursor: 'pointer'}}>Ideas</h1>
                    </div>
                </Row>
            );
        }
        else if (displayed === 'journal'){
            return (
                /* journal - main journal */
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center journal-card">
                    <div className="align-self-center">
                        <h1 onClick={this.renderJournal} style={{cursor: 'pointer'}}>journal history</h1>
                    </div>
                </Row>
            )
        }


    }
}

export default Tiles_MainRowFour;
