
import React from 'react';
import useDrag from '../../hooks/useDrag'
import './index.css';

function DragDemo() {
  useDrag({ dragger: '.dragger', draggerBox: '.draggerBox', container: '.container', maring: [10, 10, 10, 10]})

  return (
    <div className='container'>
      <div className='draggerBox'>
        <div className='dragger'>
          鼠标点击这块区域可拖动
        </div>
      </div>
    </div>
  )
}

export default DragDemo;