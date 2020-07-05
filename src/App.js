import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Select from 'react-select'
import Table from 'react-bootstrap/Table'
import isEmpty  from 'lodash'

const DATA = [
  {
  "name":"1",
  "des" :"Luu Hoang Khang",
  "code":"12312312",
  },
  {
    "name":"khang",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
    },
    {
      "name":"khang",
      "des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "name":"khang",
      "des" :"Luu Hoang Khang",
      "code":"12312312",
    },
  
]
const LISTGETBY = [10,20,30,40]
function App({data, listgetBy}) {
  const [listData, setListData ] = useState(DATA)
  const [currentPage, setCurrentPage] = useState(0)
  const [listDataCurrentPage, setListDataCurrentPage]= useState([])
  const [listPage , setListPage] =  useState([[]])
  const [getBy, setGetPage] = useState(3)
  useEffect(() => {
    // pagging()
    setUpFirstPage(currentPage, getBy)
    return () => {
    }
  }, [])
  useEffect(() => {
     console.log("userEffect2 chay")
     pushCurrentPage(currentPage, getBy)
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
  // const pagging = () =>{
  //   console.log("page")
  //   let pageMax = listData.length/getBy
  //   let listItem = [[]]
  //   for (let index = 0 ; index < pageMax; index++) 
  //   {
  //            listItem[index] =[]
  //       for (let indexJ = 0 ; indexJ < getBy ; indexJ++ ) {
            
  //           listItem[index].push(listData[indexJ])
  //       }
  //       console.log(listItem[index])
  //   }
  //   setListPage(listItem)
  //   console.log("affter paging  " + listItem)

  // }
    const pushCurrentPage = (currentPage, getBy) => {
      let listItem = []      
      let startCut = getBy*currentPage
      let endCut =  getBy*currentPage + getBy
            for (let index = startCut ; index < endCut ; index++ )
              {
                listItem.push(listData[index])
                console.log(listData[index])
              }
          setListDataCurrentPage(listItem)
          console.log(listItem)
    } 
    const setUpFirstPage = getBy => {
      let listItem = []
      for(let index = 0; index < getBy ; index++ )
      { 
        console.log("mang chay")
        listItem.push(listData[index])
      }
       setListDataCurrentPage(listItem)
    }
  return (
 <div className="App">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Ten </th>
      <th>des</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>2</td>
      <td>{(!isEmpty(listData[0])?listData[0].name.trim:"")}</td>
      <td>{currentPage}</td>
      <td>{currentPage}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
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
