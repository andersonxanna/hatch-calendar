import React from "react";
import "../index.css";
import "./NewEvent.css";
import { Link } from 'react-router-dom'

class editEvent extends React.Component {
    renderTitle() {
        return (
            <input type="text" placeholder="event title" id="ename" name="ename"></input>
        )
    }
    renderDetails() { //TODO: make this textarea
        return (
            <textarea rows="6" cols="50" placeholder="details" className="scrollable" id="edetails" name="edetails"></textarea>
        )
    }
    renderLink() {
        return (
            <input type="text" placeholder="link" id="elink" name="elink"></input>
        )
    }
    renderTimeInput() { //TODO: Make this
        return (
            <div className="grid-container">
                <div className="grid-item"><span></span></div>
                <div className="grid-item"><label>FROM </label></div>
                <div className="grid-item"><label>TO</label></div>
                <div className="grid-item"><span></span></div>
                <div className="grid-item"><span></span></div>
                <div className="grid-item"><input type="time" id="sTime" name="sTime"></input></div>
                <div className="grid-item"><input type="time" id="eTime" name="eTime"></input></div>
            </div>
        )
    }
    renderWeeklyButton() {
        return (
            <Link to='/day'>
                <button type="weekly" value="weekly" className="button">make weekly</button>
            </Link>
        )
    }
    renderEditEventButton() {
        return (
            <Link to='/day'>
                <button type="submit" value="Submit" className="button">save changes</button>
            </Link>
        )
    }
    renderCancel() {
        return (
            <Link to='/day'>
                <button type="cancel" value="cancel" className="button">&nbsp;&nbsp;cancel&nbsp;&nbsp;</button>
            </Link>
        )
    }

    render() {
        return (
            <div className="newEvent">
                <form>
                    <div className="center">{this.renderTitle()}</div>
                    <div className="center">{this.renderDetails()}</div>
                    <div className="center">{this.renderLink()}</div>
                    <div className="center">{this.renderTimeInput()}</div>
                    <div className="center">{this.renderWeeklyButton()}</div>
                    <div className="center">{this.renderEditEventButton()}<span></span>{this.renderCancel()}</div>
                </form>
            </div>
        )
    }
}

export default editEvent;

