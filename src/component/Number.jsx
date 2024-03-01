import React from 'react'
import utils from '../../public/js/utile'
import '../../public/css/style.css'

function Number() {
  return (
    <div className="right">
    {utils.range(1, 9).map(number =>
      <button key={number} className="number">{number}</button>
  )}
</div>
  )
}

export default Number