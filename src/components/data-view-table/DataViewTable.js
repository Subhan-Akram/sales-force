import React, { useEffect, useState } from 'react'
import './DataViewTable.css'
import { TableWrapper } from '../../styleComponent/Style'
function DataViewTable({ data, tableKey }) {
  console.log('this data=======>', data, 'table key', tableKey)
  const [mainKeys, setMainKeys] = useState([])
  const [headerKeys, setHeaderKeys] = useState([])

  const dataSetArrange = () => {
    // debugger
    let getData = data[0]
    console.log('get data===>', getData)
    // debugger
    let val = mainKeys[0]

    // debugger
    console.log('get data', getData[val], typeof getData[val])
    if (getData[val] !== undefined && typeof getData[val] !== 'number') {
      // debugger
      let subKeys = Object.keys(getData[val])
      // subKeys.filter(vazxl=>val !=)
      let selectedKeys = []

      headerKeys.map((key) => {
        // debugger
        subKeys.forEach((vals) => {
          if (vals !== key) {
            console.log('vals=====key', vals, '::::', key)
            // return
            if (!selectedKeys.includes(vals)) {
              selectedKeys.push(vals)
            }
          } else {
            return 'null'
          }
        })
        // return ""
      })

      console.log('seledted==>', selectedKeys)
      selectedKeys = selectedKeys.filter((val) => val != 'null')
      // debugger
      if (selectedKeys.length > 0) {
        // debugger
        if (selectedKeys[0].length != undefined) {
          setHeaderKeys((prev) => [...selectedKeys])
        } else {
          setHeaderKeys((prev) => [selectedKeys[0]])
        }
      } else {
        let tempKeys = []
        // close for now
        // if (subKeys.includes('Jan')) {
        //   tempKeys.push('Years')
        // }

        setHeaderKeys([...tempKeys, ...subKeys])
      }
    } else if (typeof getData[val] === 'number') {
      setHeaderKeys(['Total'])
    }
  }
  useEffect(() => {
    let tempFilter = []

    if (mainKeys.length == 0) {
      data?.map((val) => {
        // debugger
        // console.log("val===>",val)
        let getKey = Object.keys(val)

        console.log('key===>', getKey)
        // getKey.map(vals=>{
        let vals = getKey[0]
        // debugger
        if (mainKeys.length > 0) {
          for (let i = 0; i < mainKeys.length; i++) {
            // debugger

            if (!mainKeys.includes(vals)) {
              tempFilter.push(vals)
            }
          }
        } else {
          tempFilter.push(vals)
        }

        // })
      })
      setMainKeys((prev) => [...tempFilter])
    }
  }, [])

  useEffect(() => {
    dataSetArrange()
  }, [mainKeys])

  console.log('r===>', mainKeys)
  console.log('R====>', headerKeys)

  return (
    <div className='table'>
      <TableWrapper>
        <table cellPadding={0} cellSpacing={0} className='data_view'>
          <tr className='data_view_header'>
            {headerKeys.map((val) => (
              <th>{val.toUpperCase()}</th>
            ))}
          </tr>

          {/* {mainKeys.length>0 &&  mainKeys.map((val,i)=> <tr>
          <td className='td_data_key'>{mainKeys[i]}</td>
         </tr>
                )} */}

          {mainKeys.length > 0 &&
            headerKeys.length > 0 &&
            data.map((val, i) => {
              debugger
              // debugger
              let dataCol = val[mainKeys[i]]
              console.log('data col', dataCol)
              let keysOfCurrentRow = Object.keys(dataCol)
              let setColData
             keysOfCurrentRow= keysOfCurrentRow.length==0?[mainKeys[i]]:keysOfCurrentRow
              return (
                <tr>
                  {keysOfCurrentRow.map((vals) => {
                    dataCol !== undefined &&
                    dataCol[vals] !== undefined &&
                    dataCol[vals] !== 'Years'
                      ? (setColData = Math.floor(dataCol[vals]))
                      : (setColData = dataCol)
                    return <td>{`${Math.floor(setColData)}`.slice(0,4)}</td>
                  })}
                </tr>
              )
            })}
        </table>
      </TableWrapper>
    </div>
  )
}

export default DataViewTable
