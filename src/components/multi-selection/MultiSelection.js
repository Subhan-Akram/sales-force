import React, { useCallback, useEffect, useState } from 'react'
import { Select, Space } from 'antd'
import { MultiSelectWrapper } from '../../styleComponent/Style'

const options = []

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  })
}



const MultiSelection = ({ name }) => {
  const [selectedItems,setSelectedItems]=useState([])
  const [width,setWidth]=useState("15%")

  const handleChange =useCallback(
    (value) => {
     setSelectedItems(value)
    }
  )
  
  useEffect(()=>{
    if(selectedItems.length>3){
      setWidth(`${selectedItems+5}%`)
    }else{
      setWidth("20%")
    }
  },[handleChange])

  return  <MultiSelectWrapper width={width}>
    <Select
      mode='multiple'
      allowClear
      style={{ width: '100%' }}
      placeholder={name}
      defaultValue={[]}
      onChange={handleChange}
      options={options}
    />
  </MultiSelectWrapper>
}

export default MultiSelection
