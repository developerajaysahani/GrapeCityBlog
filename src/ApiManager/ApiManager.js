import React, {Component} from 'react';
import Axios from 'axios';
class ApiManager extends Component{
    constructor(){
        super()
    this.state = {
            person: []  
          }}
       componentDidMount(){
           Axios.get('https://boiling-shelf.herokuapp.com/posts')
           .then(res=>{ console.log(res.data);
               this.setState({ person:res.data});
           });
       }
    render(){
        return(
            <>
            </>
        );
    }
}
export default ApiManager;
