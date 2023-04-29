import React, { useEffect, useState } from 'react'
import './DataCards.css'
import { Card } from 'antd'
import { CardWrapper } from '../../styleComponent/Style'
import DataViewTable from '../data-view-table/DataViewTable'
import { tableKeysVolume } from '../../utils/table-keys/TableColKeys'

function DataCards({ title, data }) {

  const [tableDataKeys, setTableDataKeys] = useState([])
  console.log("main data=======> ")
   useEffect(() => {
    const keys = tableKeysVolume(title)
    if (keys !== 'null') {
      setTableDataKeys(keys)
    }
    console.log('keys', keys)
  }, [])
  return (
    <CardWrapper>
      <Card
        className='cards'
        bordered={false}
        style={{
          width: '100%',
        }}
      >
        <h1 className='table_title'>{title}</h1>
        <div className='table_view_wrapper'>
          {tableDataKeys.map((val,i) => {
            // console.log(data[val])
            return <div key={i}><DataViewTable tableKey={val} data={data[title][val]} /></div>
          })}
        </div>
      </Card>
    </CardWrapper>
  )
}

export default DataCards
