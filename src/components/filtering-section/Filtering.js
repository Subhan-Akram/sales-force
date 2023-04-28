import React from 'react'
import "./Filtering.css"
import MultiSelection from '../multi-selection/MultiSelection'

function Filtering() {
  return (
    <div className='filtering'>
      <MultiSelection name="Category" />
      <MultiSelection name="Brands"  />
      <MultiSelection name="MSKUs"  />
      <MultiSelection name="Region"  />
      <MultiSelection name="Volume"  />
      <MultiSelection name="Primary Sale"  />
      <MultiSelection name="Greg"  />

      
    </div>
  )
}

export default Filtering