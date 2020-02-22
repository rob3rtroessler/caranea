import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

import HealthGraph from "./HealthGraph";

class Tiles_BottomRowFour extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        let displayed = this.props.displayed;

        // HOME
        if (displayed === 'home') {
            return (
                <HealthGraph/>
            );
        }

        // JOURNAL
        else if ( displayed === 'journal'){
            return(
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center journal-card">
                    <div className="align-self-center">
                        <h1>Journal Network</h1>
                    </div>
                </Row>
            )
        }
    }
}

export default Tiles_BottomRowFour;
