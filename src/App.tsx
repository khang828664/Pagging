import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import isEmpty from 'lodash'
const DATA = [
  {
  "name":"khangKhang",
  "des" :"Luu Hoang Khang",
  "code":"12312312",
  },
  {
    "name":"khangLUU",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang123213",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang123sad",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khangkhangLuu",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khangHHJSJ",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
  },
  {
    "name":"khang)()(",
    "des" :"Luu Hoang Khang",
    "code":"12312312",
    },
    {
      "name":"khangLLKSKS",
      "des" :"Luu Hoang Khang",
      "code":"12312312",
    },
    {
      "name":"khangnnn",
      "des" :"Luu Hoang Khang",
      "code":"12312312",
    },
  
]
const LISTGETBY = [10,20,30,40]
function App() {
  const [listData, setListData ] = useState(DATA)
  const [currentPage, setCurrentPage] = useState(0)
  const [listDataCurrentPage, setListDataCurrentPage]= useState([])
  const [getBy, setGetPage] = useState(5)
  useEffect(() => {
    setUpFirstPage (getBy)
    return () => {
    }
  }, [])
  useEffect(() => {
     console.log("userEffect2 chay")
     pushCurrentPage(getBy)
    return () => {     
    }
  }, [currentPage])
  const RenderItem =()=> {
    let ActiveItem : number = currentPage 
    let items = [];
    let degree : number  =  parseInt((listData.length/getBy).toFixed(0))
    for (let index : number = 0 ; index < degree ; index++)
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
  const activePage = (index:any) =>{
    setCurrentPage(index)
  }
   const pushCurrentPage = (getBy : any) => {
      let listItem : any = []     
      let startCut = getBy*currentPage
      let endCut =  (getBy*currentPage + getBy < listData.length ) ? getBy*currentPage + getBy : listData.length
      for (let index = startCut ; index < endCut ; index++ )
              {
                listItem.push(listData[index])
                console.log(listData[index])
              }
          setListDataCurrentPage(listItem)
          console.log(listItem)
    } 
    const setUpFirstPage = (getBy : any) => {
      let listItem : any = []
      for(let index = 0; index < getBy ; index++ )
      { 
        console.log("mang chay")
        listItem.push(listData[index])
      }
       setListDataCurrentPage(listItem)
    }
    const renderItemTable = (listData : any []) => {

          return (
            listData.map((item : any, index : number) => (
              <tr key = {index}>
                <td>{index+1}</td>  
                <td>{item.name}</td>  
                <td>{item.des}</td>  
                <td>
                  <tr className ="styleButtom">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline-danger">Secondary</Button>
                  </tr>
                </td>  
              </tr>
            ))
          )
    }
  return (
 <div className="App">
  <Table striped bordered hover responsive={false}>
  <thead>
    <tr>
      <th>#</th>
      <th>Ten </th>
      <th>Mota</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    {renderItemTable((isEmpty(listDataCurrentPage))?listDataCurrentPage:[])}
  </tbody>
 </Table>
    <Pagination size ="lg">
    <PageItem onClick={()=>setCurrentPage((currentPage-1 < 0) ? currentPage : currentPage-1)}>Trang trước</PageItem>
    <Pagination> 
      <RenderItem/>
    </Pagination>
    <PageItem onClick={()=>setCurrentPage(currentPage+1)}>Trang sau </PageItem>
    </Pagination>
    </div>
  );
}

export default App;
