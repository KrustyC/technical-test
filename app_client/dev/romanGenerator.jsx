import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import convert from "./roman-numeral";


const style = {
  margin: 25,
};



var RomanGenerator = React.createClass({

	getInitialState: function() {
		return { 
			selected: undefined,
			converted: undefined,
			open: false
		};
	},

	onChange: function(event){
		this.setState({selected:event.target.value})
	},
	
	onClick: function(){
		var self = this
		if(!this.state.selected || this.state.selected <= 0 || this.state.selected >99){
			this.setState({
		      open: true,
		    });
			return
		}

		convert(this.state.selected,function(converted){
			console.log("Tornato: " + converted)
			self.setState({
		      converted: converted
		    });
		})
		
	},

	onRequestClose: function(){
	    this.setState({
	      open: false,
	    });
	},

  	render: function() {
  		return (
	        <div>
		        <p className="title">Roman Numeral Generator:</p>
		        <p className="subtitle">Enter a number between 1 and 99 and click "Convert" to see what the number would be in a Roman Numeral format.</p>
		        <div >
			        
			        <TextField
			          onChange={this.onChange}
			          type="number"
					  hintText="Insert a number (1-99):"
					/>

					<RaisedButton className="inline" label="Convert" style={style} onClick={this.onClick} />
					
					<TextField
					  hintText="Output:"
					  value={this.state.converted}
			          disabled={true}
			          type="text"
					/>

				</div>
				<Snackbar
		          open={this.state.open}
		          message="Please insert a number between 1 and 99"
		          autoHideDuration={4000}
		          onRequestClose={this.onRequestClose}
		        />
	      	</div>
      );
  }

});

module.exports = RomanGenerator;