import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Tiles_MainRowOne extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

    }

    componentDidMount() {
    }

    render() {
        let displayed = this.props.displayed;
        if (displayed === 'home'){
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                    <div className="align-self-center">
                        <h1>Calendar</h1>
                    </div>
                </Row>
            );
        } else if (displayed === 'journal'){
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center journal-card">
                    <div className="align-self-center">
                        <h1>tags</h1>
                    </div>
                </Row>
            );
        }
    }
}

export default Tiles_MainRowOne;
