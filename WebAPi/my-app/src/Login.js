import React,{Component} from 'react';

export class Login extends Component{

    render(){
        return(
            <div>
                 <input type="text" name="username" placeholder="Username"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <input type="submit"></input>
            </div>
        )
    }
}