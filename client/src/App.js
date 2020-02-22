import React, { Component } from 'react';

// react grid
import GridLayout from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import tiles
import Tiles_HeadRowLeft from "./Tiles_HeadRowLeft";
import Tiles_HeadRowMain from "./Tiles_HeadRowMain";
import Tiles_HeadRowRight from "./Tiles_HeadRowRight";
import Tiles_MainRowOne from "./Tiles_MainRowOne";
import Tiles_MainRowTwo from "./Tiles_MainRowTwo";
import Tiles_MainRowThree from "./Tiles_MainRowThree";
import Tiles_MainRowFour from "./Tiles_MainRowFour";


import Tiles_BottomRowOne from "./Tiles_BottomRowOne";
import Tiles_BottomRowFour from "./Tiles_BottomRowFour";

class App extends Component {

    constructor(props) {
        super(props);

        // get today's date
        let today = new Date;
        let todayObject = {day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear()};

        let initLayout = [
            {i: 'header-left', x: 0, y: 0, w: 2, h: 3}, // info
            {i: 'header-main', x: 2, y: 0, w: 8, h: 3}, // date
            {i: 'header-right', x: 10, y: 0, w: 2, h: 3}, // date

            {i: 'main-one', x: 0, y: 3, w: 3, h: 19}, // calendar
            {i: 'main-two', x: 3, y: 3, w: 2, h: 13}, // to do list
            {i: 'main-three', x: 5, y: 3, w: 5, h: 11}, // journal
            {i: 'main-four', x: 10, y: 3, w: 2, h: 11}, // journal #2

            {i: 'bottom-one', x: 3, y: 13, w: 2, h: 2}, // counter
            {i: 'bottom-two', x: 3, y: 16, w: 2, h: 2}, // counter
            {i: 'bottom-three', x: 3, y: 19, w: 2, h: 2}, // counter
            {i: 'bottom-four', x: 5, y: 18, w: 7, h: 8}, // chart
        ];

        this.state = {
            displayed: 'home',
            initLayout: initLayout,
            layout : initLayout,
            displayDay: todayObject
        };

        this.renderHome = this.renderHome.bind(this);
        this.openJournal = this.openJournal.bind(this);
        this.openIdeas = this.openIdeas.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    renderHome(state){
        // log
        console.log('rendering home, state set to:', state);

        this.setState({
            displayed: state,
            layout: this.state.initLayout});
    }

    openJournal(state){

        // log
        console.log('rendering journal, state set to:', state);

        // grid for journal-view
        let journalLayout = [

            {i: 'header-left', x: 0, y: 0, w: 2, h: 3}, // info
            {i: 'header-main', x: 2, y: 0, w: 8, h: 3}, // date
            {i: 'header-right', x: 10, y: 0, w: 2, h: 3}, // date

            {i: 'main-one', x: 0, y: 3, w: 2, h: 13}, // calendar -> tags #1
            {i: 'main-two', x: 0, y: 19, w: 2, h: 6}, // to do list -> tags #2

            {i: 'main-three', x: 2, y: 3, w: 6, h: 19}, // journal -> main journal
            {i: 'main-four', x: 8, y: 4, w: 4, h: 10}, // ideas - journal chart #1

            {i: 'bottom-one', x: 0, y: 0, w: 0, h: 0}, // counter -> collapse
            {i: 'bottom-two', x: 0, y: 0, w: 0, h: 0}, // counter -> collapse
            {i: 'bottom-three', x: 0, y: 0, w: 0, h: 0}, // counter -> collapse
            {i: 'bottom-four', x: 8, y: 9, w: 4, h: 9}, // chart -> journal chart #2

        ];

        // set state
        this.setState({
            displayed: state,
            layout: journalLayout })
    }

    openIdeas(state){

        // log
        console.log('rendering ideas, state set to:', state);

        // grid for journal-view
        let journalLayout = [

            {i: 'header-left', x: 0, y: 0, w: 2, h: 3}, // info
            {i: 'header-main', x: 2, y: 0, w: 8, h: 3}, // date
            {i: 'header-right', x: 10, y: 0, w: 2, h: 3}, // date

            {i: 'main-one', x: 0, y: 3, w: 2, h: 1}, // calendar -> tags #1
            {i: 'main-two', x: 0, y: 19, w: 2, h: 6}, // to do list -> tags #2

            {i: 'main-three', x: 2, y: 3, w: 6, h: 19}, // journal -> main journal
            {i: 'main-four', x: 8, y: 4, w: 4, h: 10}, // ideas - journal chart #1

            {i: 'bottom-one', x: 0, y: 0, w: 0, h: 0}, // counter -> collapse
            {i: 'bottom-two', x: 0, y: 0, w: 0, h: 0}, // counter -> collapse
            {i: 'bottom-three', x: 0, y: 0, w: 0, h: 0}, // counter -> collapse
            {i: 'bottom-four', x: 8, y: 9, w: 4, h: 9}, // chart -> journal chart #2

        ];

        // set state
        this.setState({
            displayed: state,
            layout: journalLayout })

    }

    componentDidMount() {
    }

    updateDate(test){
        console.log('hello, updating date', test);
        this.setState({displayDay: test})
    }

    render() {
        let app = this;
        console.log('rendereing home for the first time', this.state);

        return (
            <div className="App">
                <Container fluid={true}>
                    <Row style={{height: '100vh', background: '#e2e2e2'}}>
                        <GridLayout className="layout" layout={app.state.layout} cols={12} rowHeight={22} width={1536}>

                            {/*HOME DASHBOARD*/}
                            <div key="header-left" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_HeadRowLeft displayed={this.state.displayed}/>
                            </div>

                            <div key="header-main" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_HeadRowMain displayed={this.state.displayed} today={this.state.displayDay} updateDate={this.updateDate}/>
                            </div>

                            <div key="header-right" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_HeadRowRight displayed={this.state.displayed} renderHome={this.renderHome}/>
                            </div>

                            {/* CALENDAR */}
                            <div key="main-one" className='home-card home-calendar'>
                                <Tiles_MainRowOne displayed={this.state.displayed}/>
                            </div>

                            {/* TODO */}
                            <div key="main-two" className='home-card home-todo'>
                                <Tiles_MainRowTwo displayed={this.state.displayed}/>
                            </div>

                            {/* JOURNAL */}
                            <div key="main-three" className='home-card'>
                                <Tiles_MainRowThree parentCallback={this.openJournal} displayed={this.state.displayed}/>
                            </div>

                            <div key="main-four" className='home-card home-ideas'>
                                <Tiles_MainRowFour parentCallback={this.openIdeas} displayed={this.state.displayed}/>
                            </div>

                            {/* MINIS */}
                            <div key="bottom-one" style={{borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_BottomRowOne displayed={this.state.displayed} displayDay={this.state.displayDay}/>
                            </div>

                            <div key="bottom-two" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>

                            </div>
                            <div key="bottom-three" style={{background:'darkgrey', borderRadius: '5px', border: 'thin solid grey'}}>

                            </div>

                            <div key="bottom-four" style={{borderRadius: '5px', border: 'thin solid grey'}}>
                                <Tiles_BottomRowFour displayed={this.state.displayed}/>
                            </div>
                        </GridLayout>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;