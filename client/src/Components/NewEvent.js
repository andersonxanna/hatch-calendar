import React from "react";
import "../index.css";
import "./NewEvent.css";
import { Link } from 'react-router-dom';
import EventObj from './EventObj.js';





class newEvent extends React.Component {
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
    renderWeeklyButton() { //TODO: method to show clicked color
        return (
            <Link to='/day'>
                <button type="weekly" value="weekly" class="button">make weekly</button>
            </Link>
        )
    }
    renderAddEventButton() {
        return (
            <Link to='/day'>
                <button type="submit" value="Submit" class="button" >add event</button>
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

    submitAddEvent() {
        const update_Event_options ={
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                
            }),
        }
        fetch('http://localhost:3000/DBInfo/Individual', update_Event_options)
        .then((response) => response.json())
        .then((data) => {
            const currParam = (this.state.currentDate).toString();
            if(data.dateSpecific.hasOwnProperty(currParam)){

                var desiredValue = data.dateSpecific[currParam];
            }else{
                //Handle no value loadable

            }
            

        });

    }



    render() {
        return (
            <div className="newEvent">
                <form onSubmit={this.submitAddEvent()}>
                    <div className="center">{this.renderTitle()}</div>
                    <div className="center">{this.renderDetails()}</div>
                    <div className="center">{this.renderLink()}</div>
                    <div className="center">{this.renderTimeInput()}</div>
                    <div className="center">{this.renderWeeklyButton()}</div>
                    <div className="center">{this.renderAddEventButton()}<span></span>{this.renderCancel()}</div>
                </form>
            </div>
        )
    }
}

export default newEvent;
