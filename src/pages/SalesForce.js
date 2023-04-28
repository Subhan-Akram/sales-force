import React from 'react'
import Header from '../components/header/Header'
import './SalesForce.css'
import ExeclIcon from '../images/excel_icon.svg'
import Filtering from '../components/filtering-section/Filtering'
import { Button } from 'antd'
import { ButtonStyled } from '../styleComponent/Style'
import DataCards from '../components/data-cards/DataCards'
import data from "../data/data.json"
function SalesForce() {
  // console.log("data>>",data)
  const {Volume,TotalVolume,QuaterVolume,HalfVolume,Aws,HalfAws,HalfAds,Ads,TotalAds,QuaterAds,QuaterAws,TotalAws}=data
  const dataSet=[{
    "YOY-Volume":{Volume,TotalVolume,QuaterVolume,HalfVolume},
    title:"YOY-Volume"
  },
  {"YOY-AWS":{Aws,HalfAws,QuaterAws,TotalAws},title:"YOY-AWS"},
  {"YOY-ADS":{Ads,TotalAds,QuaterAds,HalfAds,TotalAds},title:"YOY-ADS"}
]
  // console.log("data set",dataSet)
  return (
    <div className='sales_force'>
      <div className='sale_force_header'>
        <h1 className='page_title'>Primary Dasboard</h1>
        <button>
          <img src={ExeclIcon}></img>
        </button>
      </div>
      <div className='filtering_section'>
        <Filtering />
        <ButtonStyled>Submit</ButtonStyled>
      </div>
      <div className='table_data_view'>
        {dataSet.map(val=>{
          return(
            <DataCards title={val.title} data={val}  />
          )
        })}
      </div>
    </div>
  )
}

export default SalesForce
