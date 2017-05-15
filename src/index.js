import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//Create component
class TodoComponent extends Component {
	render() {
		return (
			<div>
     		<h1>Hellooooo</h1>
     		<p>{this.props.mssg}</p>
      </div>
		);
	}
}

//put component into html page
ReactDOM.render(<TodoComponent mssg="I like food"/>, document.getElementById('todo-wrapper'));