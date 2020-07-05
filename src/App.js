import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
const DATA = [
  {
  "Name":"khang",
  "Des" :"Luu Hoang Khang",
  "code":"12312312",
  },
  {
    "Name":"khang",
    "Des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "Name":"khang",
    "Des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "Name":"khang",
    "Des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "Name":"khang",
    "Des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "Name":"khang",
    "Des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "Name":"khang",
    "Des" :"Luu Hoang Khang",
    "code":"12312312",
    },
    {
      "Name":"khang",
      "Des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "Name":"khang",
      "Des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "Name":"khang",
      "Des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "Name":"khang",
      "Des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "Name":"khang",
      "Des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "Name":"khang",
      "Des" :"Luu Hoang Khang",
      "code":"12312312",
      },
      {
        "Name":"khang",
        "Des" :"Luu Hoang Khang",
        "code":"12312312",
      },
      {
        "Name":"khang",
        "Des" :"Luu Hoang Khang",
        "code":"12312312",
      },
      {
        "Name":"khang",
        "Des" :"Luu Hoang Khang",
        "code":"12312312",
      },
      {
        "Name":"khang",
        "Des" :"Luu Hoang Khang",
        "code":"12312312",
      },
      {
        "Name":"khang",
        "Des" :"Luu Hoang Khang",
        "code":"12312312",
      },
  
]
const LISTGETBY = [10,20,30,40]
function App({data, listgetBy}) {
  const [listData, setListData ] = useState(DATA)
  const [currentPage, setCurrentPage] = useState(0)
  const [listDataCurrentPage, setListDataCurrentPage]=([])
  const [getBy, setGetPage] = useState([3])
  useEffect(() => {
    console.log(listData)
    pushDataCurrentPage()
    return () => {
      
    }
  }, [currentPage])
  const RenderItem =()=> {
    let ActiveItem = currentPage 
    let items = [];
    let degree = (listData.length/getBy).toFixed(0)
    for (let index = 0 ; index < degree ; index++)
    {
      items.push(
        <PageItem key = {index} active = {index === ActiveItem} onClick ={()=>{activePage(index)}}>
          {index+1}
        </PageItem>
      )
    }
    return (
      <Pagination>
        {items}
      </Pagination>
    )
  }
  const activePage = index =>{
    setCurrentPage(index)
    console.log("setPage")
  }
  const pushDataCurrentPage = currentPage=>{
  
  }
  return (
    <div className="App">
     <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
     <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton> 
    <Pagination size = "lg">
    <PageItem onClick={()=>setCurrentPage(currentPage-1)}>Trang trước</PageItem>
    <Pagination>
      <RenderItem/>
    </Pagination>
    <PageItem onClick={()=>setCurrentPage(currentPage+1)}>Trang sau </PageItem>
    </Pagination>
    </div>
  );
}

export default App;
