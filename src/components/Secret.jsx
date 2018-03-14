import React, {Component} from 'react';

export default class Secret extends Component {
    render(){
        return(
            <div>
                <h3>This is a super secret area.</h3>
                <br/>
                <p>Back to <a href="/">Home</a></p>
                <br/>
                <p>Or<button onClick={this.props.auth.logout}>Logout</button></p>
            </div>
        )
    }
}