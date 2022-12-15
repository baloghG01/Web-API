import React,{Component} from 'react';
import {Navigation} from './Navigation';

export class Home extends Component{

    render(){
        return(
           
            <div>
                <Navigation></Navigation>
                This is Home page.
            </div>
        )
    }
}