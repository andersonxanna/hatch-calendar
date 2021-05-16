import React from "react";
import "../index.css";
import "./NewEvent.css";

class newEvent extends React.Component {
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
    renderWeeklyButton() { //TODO: method to show clicked color
        return (
            <button type="weekly" value="weekly" class="button">make weekly</button>
        )
    }
    renderAddEventButton() {
        return (
            <button type="submit" value="Submit" class="button">add event</button>
        )
    }
    renderCancel() {
        return (
            <button type="cancel" value="cancel" class="button">&nbsp;&nbsp;cancel&nbsp;&nbsp;</button>
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
                <div class = "center">{this.renderAddEventButton()}<span></span>{this.renderCancel()}</div>
            </form>
            </div>
        )
    }
}

export default newEvent;