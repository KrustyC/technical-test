import React from "react";
import ReactDOM from "react-dom"; 
//import Selector from "./selector.jsx"

import {
  grey900,
  blueGrey800
} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import AppBar from 'material-ui/AppBar';
import  Divider from 'material-ui/Divider'

import Selector from "./materialSelector.jsx";
import RomanGenerator from "./romanGenerator.jsx";



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
    accent2Color: blueGrey800,
    accent3Color: blueGrey800,
    borderColor: blueGrey800,
    disabledColor: blueGrey800
  },
  appBar: {
    color: grey900,
  },
});


var FirstRow = React.createClass({
 	render: function() {
	    return (
	      <MuiThemeProvider muiTheme={muiTheme}>
	      	<div>
	      	<AppBar
			    title="Tecnichal test"
			    iconElementLeft={<div></div>}
			  />
			<div className="portion">
	      		<Selector />
	      	</div>
	      	<hr/>
	      	<div className="portion">
	      		<RomanGenerator />
	      	</div>
	      	</div>
	      </MuiThemeProvider>

	    );
	}
});
 
ReactDOM.render(
  <FirstRow />,
  document.querySelector("#app")
);