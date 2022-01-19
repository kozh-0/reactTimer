import React, {Component} from "react";

export default class Timer2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            isCounting: false,
        }
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        if (+localStorage.getItem('count')) {
            this.setState({count: +localStorage.getItem('count')})
        }
    }
    componentDidUpdate() {
        localStorage.setItem('count', this.state.count);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onStart() {
        this.setState({isCounting: true});
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
    }
    onStop() {
        this.setState({isCounting: false});
        clearInterval(this.timerId);
    }
    reset() {
        this.setState({count: 0, isCounting: false});
        clearInterval(this.timerId);
    }


    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                {this.state.isCounting ? 
                    <button onClick={this.onStop}>Stop</button> :
                    <button onClick={this.onStart}>Start</button>}
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}