import React from 'react';
import '../Styles/details.css'
import breakfast from '../Assets/breakfast.jpg'

class Details extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={breakfast} width="100%" height="500px" alt="img" />
                    <button class="gallery-button">Click to see Image Gallery</button>
                </div>
                <button className="btn btn-danger" style={{ float: 'right', margin: '15px', backgroundColor: '#ce0505' }}>Place Online Order</button>
                <div class="heading">The Big Chill Cakery</div>
                <div class="tabs">
                    {/* Tab-1 */}
                    <div class="tab">
                        <input type="radio" id="tab-1" name="tab-group-1" checked />
                        <label for="tab-1">Overview</label>

                        <div class="content">
                            <div class="about">About the place</div>
                            <div class="head">Cuisine</div>
                            <div class="value">Fast Food</div>
                            <div class="head">Average Cost</div>
                            <div class="value">&#8377; 700</div>
                        </div>
                    </div>
                    {/* Tab-2 */}
                    <div class="tab">
                        <input type="radio" id="tab-2" name="tab-group-1" />
                        <label for="tab-2">Contact</label>
                        <div class="content">
                            <div class="head">Phone Number</div>
                            <div class="value">+91-9876543217</div>
                            <div class="head">The Big Chill Cakery</div>
                            <div class="value">Shalimar Bagh, Delhi</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;