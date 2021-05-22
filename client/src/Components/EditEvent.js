import React from "react";
import "../index.css";
import "./NewEvent.css";
import {Link} from 'react-router-dom'

class editEvent extends React.Component {
    renderTitle() {
        return (
            <input type="text" placeholder="event title" id="ename" name="ename"></input>
        )
    }
    renderDetails() { //TODO: make this textarea
        return (
            <textarea rows="6" cols="50" placeholder="details" class="scrollable" id="edetails" name="edetails"></textarea>
        )
    }
    renderLink() {
        return (
            <input type="text" placeholder="link" id="elink" name="elink"></input>
        )
    }
    renderTimeInput() { //TODO: Make this
        return (
            <div class="grid-container">
                <div class = "grid-item"><span></span></div>
                <div class = "grid-item"><label>FROM </label></div>
                <div class = "grid-item"><label>TO</label></div>
                <div class = "grid-item"><span></span></div>
                <div class = "grid-item"><span></span></div>
                <div class = "grid-item"><input type="time" id="sTime" name="sTime"></input></div>
                <div class = "grid-item"><input type="time" id="eTime" name="eTime"></input></div>
            </div>
        )
    }
    renderWeeklyButton() { 
        return (
	<Link to='/day'>
            <button type="weekly" value="weekly" class="button">make weekly</button>
        </Link>
	 )
    }
    renderEditEventButton() {
        return (
	<Link to='/day'>
            <button type="submit" value="Submit" class="button">edit event</button>
        </Link>
	 )
    }
    renderCancel() {
        return (
	    <Link to='/day'>
            	<button type="cancel" value="cancel" class="button">&nbsp;&nbsp;cancel&nbsp;&nbsp;</button>
            </Link>
        )
    }

    render() {
        return (
            <div className="newEvent">
            <form>
                <div class="center">{this.renderTitle()}</div>
                <div class = "center">{this.renderDetails()}</div>
                <div class = "center">{this.renderLink()}</div>
                <div class = "center">{this.renderTimeInput()}</div>
                <div class = "center">{this.renderWeeklyButton()}</div>
                <div class = "center">{this.renderEditEventButton()}<span></span>{this.renderCancel()}</div>
            </form>
            </div>
        )
   }
}

export default editEvent;


