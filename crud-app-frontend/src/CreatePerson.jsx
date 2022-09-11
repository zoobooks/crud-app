import React from 'react';c

onst CreatePerson = () => {
    return(
        <div>
            <h1>Edit Person</h1>
            <form action="/person/edit" method="put">
                <div>First Name: <input type="text" id="fname" name="fname"></input></div>
                <div>Last Name: <input type="text" id="lname" name="lname"></input></div>
                <div>Email Address: <input type="text" id="email" name="email"></input></div>
                <div>City: <input type="text" id="city" name="city"></input></div>
                <div>State: <input type="text" id="state" name="state"></input></div>
                <div>Zip Code:<input type="text" id="zip" name="zip"></input></div>
                <button type="button">Submit</button>
            </form>
        </div>
    )
}

export default CreatePerson;