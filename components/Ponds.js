import React from 'react';

function Ponds() {
  return (
  <div className='pond'>
      <h2 className='pondTitle'>第8池</h2>
      <div className="payloadBlock">
        <div className="paramTitle">DO</div>
        <div className="param mg">10.13</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">PH</div>
        <div className="param">8.21</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">ORP</div>
        <div className="param mV">243.63</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">TEMP</div>
        <div className="param">20.43</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">鹽度</div>
        <div className="param">25.82</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">水位</div>
        <div className="param">0.85</div>
      </div>
  </div>
  )
}

export default Ponds;
