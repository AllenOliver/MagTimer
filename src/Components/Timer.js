import React from 'react';

class Timer extends React.Component {

    constructor() {
        super();
        this.state = { time: {}, seconds: 210, buttonText: "Start Timer", enabled: true };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar, buttonText: "Start Timer", enabled: true });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
            this.setState({buttonText: "Timer Started", enabled: false});
        }
        else {
            this.setState({
                time: this.secondsToTime(210),
                buttonText: "Start Timer",
                enabled: false
                //seconds: 5,
            });
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        let audio = new Audio('./Sounds/MagTime.wav')
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {

            audio.play();
            clearInterval(this.timer);
            this.setState({
                time: this.secondsToTime(seconds),
                seconds: 210,
                buttonText: "Restart Timer",
                enabled: true
            });
        }
    }

    render() {
        return <div >
            <div className="row">
                <h5>Minutes: {this.state.time.m} Seconds: {this.state.time.s}</h5>
            </div>
            <div className="row">
                <button className="btn btn-block btn-primary startButton"  disabled={!this.state.enabled} onClick={this.startTimer}>{this.state.buttonText}</button>
            </div>
        </div>



    }
}

export default Timer;