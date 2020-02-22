import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class Tiles_HeadRowMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: true
        };

        // lookup table for months
        this.monthTable = {1:31, 2:28, 3: 31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11: 30, 12: 31};


        // bind click event to render the journal dashboard
        this.moveToYesterday = this.moveToYesterday.bind(this);
        this.moveToTomorrow = this.moveToTomorrow.bind(this);

    }

    componentDidMount() {
        console.log('heading mounted')
    }

    moveToYesterday() {
        let today = this.props.today;

        // if 'today' is the first of a month, change month;
        if (this.props.today.day === 1){

            // if not in January, just update month & day;
            if(this.props.today.month !== 1){
                this.props.today.month -= 1;
                this.props.today.day = this.monthTable[this.props.today.month];
            }
            // inf in January, update year, month, and day
            else {
                this.props.today.year -= 1;
                this.props.today.month = 12;
                this.props.today.day = this.monthTable[this.props.today.month]
            }

            // then pass new 'today' back to parent
            this.props.updateDate(today);
        }

        // otherwise, just update the day
        else {
            this.props.today.day -= 1;
            this.props.updateDate(today);
        }

    }

    moveToTomorrow() {
        let today = this.props.today;

        // if today is the last of a month -> change month;
        if (this.props.today.day === this.monthTable[this.props.today.month]){

            // if not in December, just month & day
            if (this.props.today.month !== 12){
                this.props.today.month += 1;
                this.props.today.day = 1;
            }

            else {
                this.props.today.year += 1;
                this.props.today.month = 1;
                this.props.today.day = 1;
            }

            // then pass new 'today' back to parent
            this.props.updateDate(today);
        }

        // otherwise, just update the day
        else {
            this.props.today.day += 1;
            this.props.updateDate(today);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let dateString = this.props.today.year + '-' + this.props.today.month + '-' + this.props.today.day;
        console.log('heading state', dateString);
    }


    render() {
        if (this.props.displayed === 'home') {
            return (
                <Row style={{height: '100%'}}>
                    <Col lg={2}>
                        <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center move-next" onClick={this.moveToYesterday}>
                            <div className="align-self-center">
                                <h1>y</h1>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={8}>
                        <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                            <div className="align-self-center">
                                <h1>{this.props.today.day}. {this.props.today.month}. {this.props.today.year}</h1>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center move-next" onClick={this.moveToTomorrow}>
                            <div className="align-self-center">
                                <h1>t</h1>
                            </div>
                        </Row>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center journal-card">
                    <div className="align-self-center">
                        {this.props.displayed === 'journal' &&
                        <h1>Journal Monday, December 9th, 2019</h1>
                        }
                    </div>
                </Row>
            );
        }
    }
}

export default Tiles_HeadRowMain;
