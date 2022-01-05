import React, { Component } from 'react'
import { tourData } from '../tourData'
import Tour from '../Tour/Tour';
import './TourList.scss'
export default class TourList extends Component {
    state={
        tours: tourData
    };

    removeTour = id => {
        const {tours} = this.state
        //only tours that do not match the id are going to be placed into sortedTours
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours:sortedTours
        })
    }

    render() {
       const {tours} = this.state;

        return (
            <section className='tourlist'>
                {tours.map((tour)=>{
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/> 
                    )
                })}
            </section>
        )
    }
}
