import styled from 'styled-components'
import { Button, Select } from 'antd'

export const ButtonStyled = styled(Button)`
  border: 1.5px solid #0353a4;
  width: 140px;
  height: 37px;
  color: #0353a4;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  background-color: #e6e6e7;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`
export const MultiSelectWrapper = styled.div`
  /* align-items: center; */
  background-color: rgb(255, 255, 255);
  border-color: rgb(204, 204, 204);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  width: ${(props) => props.width};
  /* cursor: default; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* -webkit-box-pack: justify; */
  /* justify-content: space-between; */
  /* position: relative; */
  transition: all 100ms ease 0s;
  outline: 0px !important;
  & .ant-select-selector {
    height: 38px !important;
    border: none !important;
  }

  & .ant-select-multiple {
    /* display: flex !important;
    justify-content: flex-start !important;
    gap: .5rem !important; */
  }
`
export const CardWrapper = styled.div`
  & .ant-card {
    border-radius: 1px !important;
    padding: 0 !important;
  }

  & .ant-card-body {
    padding: 16px !important;
  }
`

export const TableWrapper = styled.div`
  & .data_view{
    & .data_view_header{
    border: 1px solid blue;
    
      & th{
        color: #0353a4;
    border: 1px solid #e9e9e9;
    height: 24px;
    background-color: #0353a4;
    color: #fff;
    font-weight: 400;
    width:55.36px;
    height:27px;

}
& td{
  /* color: #0353a4; */
    border: 1px solid #e9e9e9;
    height: 24px;
}
      }
  }
  
  

`
