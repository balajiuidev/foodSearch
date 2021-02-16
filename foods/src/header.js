import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <div className="panel-heading">
                <div className="panel-title">Search</div>
                <ul className="list-group">
                <li className="list-group-item" style={{display: "inline-block"}}>Cuisine Type</li>
                <li className="list-group-item" style={{display: "inline-block"}}>Meal Type</li>
                <li className="list-group-item" style={{display: "inline-block"}}>Dish Type</li>
                <li className="list-group-item" style={{display: "inline-block"}}>Health</li>
                <li className="list-group-item" style={{display: "inline-block"}}>Calories</li>
                <li className="list-group-item" style={{display: "inline-block"}}>Time</li>
                <li className="list-group-item" style={{display: "inline-block"}}>Diet</li>
				</ul>
            </div>
        );
    }
}