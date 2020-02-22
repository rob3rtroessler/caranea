import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import HealthGraph from "./HealthGraph";

class Tiles_BottomRowOne extends Component {

    constructor(props) {
        super(props);

        // state
        this.state = {
            weightIsSet: false,
            value: 187.50,
        }
    }

    getDateString(dateObj){
        return dateObj.year + '-' + dateObj.month + '-' + dateObj.day;
    }

    componentDidMount() {

        // log
        console.log('mounting weight tile, getWeight()');

        // getting weight info
        this.getWeight();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        // log
        console.log('weight_tile did update, what now?');
        console.log();

        // if the date string is still the same, the value must have changed;
        // the value changes automatically, though;
        // that means, we need to make sure to get a new weight only if the value didn't change.

        // if the date changed, getWeight
        console.log(this.props.displayDay.day, prevProps.displayDay.day );
        if (this.props.displayDay.day === prevProps.displayDay.day){

        }
        //this.getWeight();
    };


    decrease = () => {
        this.setState({ value: this.state.value - .1, weightIsSet: false});
    };

    increase = () => {
        this.setState({ value: this.state.value + .1, weightIsSet: false });
    };

    save = () => {
        let dateString = this.props.dateString;

        fetch(
            `/api/weight/saveDay`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({dateString})
            }
            )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ weightIsSet: true })
            });
    };

    getWeight = () => {

        // log
        console.log('getting weight');

        // date
        let dateString = 'placeholder';

        // fetch
        fetch(
            `/api/weight/getDay`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({dateString})
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log('weight for particular date', data);
                if (data){
                    console.log(data);
                    //this.setState({value: +data[0]['entry_value'], weightIsSet: true})
                }
                else {

                }
            });

    };

    render() {
        let displayed = this.props.displayed;

        // HOME
        if (displayed === 'home') {
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0', background: 'darkgrey'}}>
                    <Col sm={2}>
                        <Row style={{height:'100%'}} className="justify-content-center">
                            <div className="align-self-center">
                                <button onClick={this.decrease} className="minus"> - </button>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row style={{height:'100%'}} className="justify-content-center">
                            <div className="align-self-center">
                                {/* if value was set */}
                                {this.state.weightIsSet === false &&
                                <input id='weight_value' value={this.state.value}
                                       style={{width: '100%', textAlign:'center', color: 'red', background: 'transparent', border: 0}} />

                                }
                                {this.state.weightIsSet === true &&
                                <input id='weight_value' value={this.state.value}
                                       style={{width: '100%', textAlign:'center', color: 'green', background: 'transparent', border: 0}} />

                                }
                            </div>
                        </Row>
                    </Col>
                    <Col sm={2}>
                        <Row style={{height:'100%'}} className="justify-content-center">
                            <div className="align-self-center">
                                <button onClick={this.increase} className="plus">+</button>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row style={{height:'100%'}} className="justify-content-center">
                            <div className="align-self-center">
                                <button onClick={this.save} className="save">save</button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            );
        }

        // JOURNAL
        else if ( displayed === 'journal'){
            return null;
        }
    }
}

export default Tiles_BottomRowOne;
