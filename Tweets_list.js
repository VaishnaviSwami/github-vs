import React, { Component } from "react";

import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Tweets_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
          };
          this.handleChange = this.handleChange.bind(this);
          this.onFormSubmit = this.onFormSubmit.bind(this);

        this.createTasks=this.createTasks.bind(this);
        //this.delete = this.delete.bind(this);
      }

      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
      }
    
      createTasks(item) {
        return <li onClick={() => this.delete(item.key)} 
        key={item.key}>{item.text}</li>
      }
      delete(key) {
        this.props.delete(key);
      }
      
  render() {
    var tweetEntries = this.props.entries;
    var listItems = tweetEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
      
   
    );
  }
};
 
export default Tweets_list;