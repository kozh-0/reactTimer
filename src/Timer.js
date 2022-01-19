import React, {Component} from "react";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isCounting: false
        };
        this.handleReset = this.handleReset.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    componentDidMount() {
        const userCount = +localStorage.getItem('count');
        if (userCount) {
            this.setState({count: userCount});
        }
    }
    componentDidUpdate() {
        localStorage.setItem('count', this.state.count);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleReset() {
        this.setState({isCounting: false, count: 0});
        clearInterval(this.timerId);
    }
    handleStart() {
        this.setState({isCounting: true})
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000)
    }

    handleStop() {
        this.setState({isCounting: false});
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div >
                <h3>React Timer</h3>
                <h4>{this.state.count}</h4>
                {this.state.isCounting ? (
                    <button onClick={this.handleStop}>Stop</button>
                ) : (
                    <button onClick={this.handleStart}>Start</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}