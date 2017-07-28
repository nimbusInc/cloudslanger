import React from 'react'

export default function Categories() {
    let category
    return (
        <div className="col-md-12 m-bottom-60">
            <div className="filters-button-group text-right sm-text-center">
                <button className="button is-checked" onClick={() => category='all'}>View all</button>
                <button className="button" onClick={() => category='rough weather'}>Rough Weather</button>
                <button className="button" onClick={() => category='precipitation'}>Precipitation</button>
            </div>
        </div>
    )
}
