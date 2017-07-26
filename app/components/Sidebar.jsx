import React from 'react'

export default function SideBar(props){

    return(
    <div>
      <div className="container">
        <div className="row">
          <h3>Clouds</h3> // Clouds can change if need be
          <hr/>
            <p>Cloud typeA</p> // Each p will be generated by a function mapping over the different cloud type
            <p>Cloud typeB</p>
            <p>Cloud typeC</p>
        </div>
      <div className="row">
        <h3> Filters</h3>
      </div>
      <div className="row">
        <h5>Color</h5>
        <hr/>
          <div class="input-group">
            <div class="input-group-addon">
              <input type="checkbox" aria-label="...">
                <span>White</span>//A color
              </input>
            <div class="input-group-addon">
              <input type="checkbox" aria-label="...">
                <span>Grey</span>//B color
              </input>
              <div class="input-group-addon">
                <input type="checkbox" aria-label="...">
                  <span>Avocado</span>//C color
                </input>
          </div>
      </div>
          <h5>Locations</h5>
          <hr/>
          <div class="input-group-addon">
            <input type="checkbox" aria-label="...">
              <span>Americas</span>//A Area
            </input>
          <div class="input-group-addon">
            <input type="checkbox" aria-label="..."></input>
              <span> Eurasia</span>//B Area
            </div>
            <div class="input-group-addon">
              <input type="checkbox" aria-label="..."></input>
                <span>Austroasia</span>//C Area
              </div>
          </div>
      </div>
    </div>
  )
}
