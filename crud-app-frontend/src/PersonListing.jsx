import React from 'react';
// import Button from '@material-ui/core/Button';

const PersonListing = () => {
    
    return(
        <div>
            <h1>
            Person Listing
            </h1>
            <p>
                {/* <Button>Create New Person</Button> */}
                <button type="button">Create New Person</button>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ASDassd</td>
                        <td>asd</td>
                        <td>sadsad</td>
                        <td><button type="button">Edit Person</button> <button type="button">Delete Person</button></td>
                    </tr>
                </tbody>

            </table>
            
        </div>
    )
}

export default PersonListing;