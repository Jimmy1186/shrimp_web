import React from 'react';

function Ponds({data,pondTitle}) {
  return (
  <div className='pond'>
      <h2 className='pondTitle'>第{pondTitle}池</h2>
      <div className="payloadBlock">
        <div className="paramTitle">DO</div>
        <div className="param mg">{data[0].DO}</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">PH</div>
        <div className="param">{data[0].PH}</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">ORP</div>
        <div className="param mV">{data[0].ORP}</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">TEMP</div>
        <div className="param">{data[0].TEMP}</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">鹽度</div>
        <div className="param">{data[0].S}</div>
      </div>
      <div className="payloadBlock">
        <div className="paramTitle">水位</div>
        <div className="param">{data[0].WL}</div>
      </div>
  </div>
  )
}

export default Ponds;
