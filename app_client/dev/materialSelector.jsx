import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import axios from 'axios';

class Selector extends Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
  		value: null,
  		options: [ 
        	{value: 1, label: 'Reading'},
	    	  {value: 2, label: 'Writing'},
	    	  {value: 3, label: 'Maths'}
	    ],
      content: null
  	}
  
  	this.onChange = this.onChange.bind(this);
  }
  
  onChange(event, index, value){
    var self = this

  	axios.get('/subject-data/' + value).then(function(res){
      self.setState({
          value: value,
          content: res.data.content
      });
    })
    
  }
  
  render() {
    return (
      <div id="selector-div">
        <p className="title">Subject selector</p>
        <SelectField
          floatingLabelText="Please select a subject"
          value={this.state.value}
          onChange={this.onChange}
        >
        {this.state.options.map(x => <MenuItem key={x.value} value={x.value} primaryText={x.label} />)}
        </SelectField>
        
        <ComponentList content={this.state.content} />
      
      </div>
    );
  }
}


var ComponentList = React.createClass({

  render: function() {
      return (
        <div>
        {
          this.props.content &&
          <List>
            {this.props.content.map(x => <ListItem key={x.id} primaryText={x.name} />)}
          </List>
        }
        {
          !this.props.content && <p className="subtitle">Select a subject above to view content</p>
        }
        </div>

      );
  }

});

module.exports = Selector;