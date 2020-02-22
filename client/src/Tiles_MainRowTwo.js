import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Tiles_MainRowTwo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayed: this.props.displayed
        };

    }

    getData() {
        fetch(
            `/api/todo`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: 'test'
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }

    componentDidMount() {


    }

    render() {
        return (
            <Row style={{height: '100%', marginLeft: '0', marginRight: '0'}} className="justify-content-center">
                <div onClick={this.getData} className="align-self-center">
                    {this.props.displayed === 'home' &&
                        <h1>TODO 2</h1>
                    }
                </div>
            </Row>
        );
    }
}

export default Tiles_MainRowTwo;
