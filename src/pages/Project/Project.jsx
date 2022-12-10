import React from 'react'
import { Header } from '../../components';
import {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles} from '../../data/dummy';

const Project = () => {

    const [projectList, setProjectList] = useState([])
    const [search, setSearch] = useState("")
    const [filterProject, setFilterProject] = useState([])
  
    /*get project list*/
    useEffect(()=>{
      const getProject = async () => {
        const projectFromServer = await fetchProject()
        setProjectList(projectFromServer)
        setFilterProject(projectFromServer)
      }
      getProject()
    },[])
  
    const fetchProject = async () =>{
      const res = await fetch('http://localhost/admin_api/public/api/v1/project')
      const data = await res.json()
      return data['data']
    }
    /*--------------*/
  
    /*sorting project list*/
    useEffect(() => {
      const result = projectList.filter(projectList => {
        return projectList.project_name.toLowerCase().match(search.toLowerCase()) 
      })
      setFilterProject(result)
    },[search])
    /*------------------*/
  
    const deleteProject = async (id) =>{
      // await fetch(`http://localhost/admin_api/public/api/v1/sliders/${id}`, {method: `DELETE`})
      // setSliderList(sliderList.filter((sliderList) => sliderList.id_slider !== id))
      // setFilterSlider(filterSlider.filter((filterSlider) => filterSlider.id_slider !== id))
    }
  
    const columns = [
      {
        name: "ID",
        selector: (row, index) => index + 1,
        width: "20%",
        sortable: true,
        style: {
          padding: "10px 15px",
          justifyContent:"center"
        }
      },
      {
        name: "Project Name",
        selector: 'project_name',
        cell: (row) => <div>{row.project_name}</div>,
        width: "40%",
        sortable: true,
        style: {
          padding: "10px 15px",
          justifyContent:"center"
        }
      },
      {
        name: "Customize",
        cell:(row) => 
        <button style={{ background: '#ee5e68' }} className="text-white py-1 px-2 capitalize rounded-2xl text-md mr-1"
          onClick={() => {if (window.confirm('Are you sure to delete this item?')) deleteProject(row.id_slider)} }>
          Delete
        </button>,
        width: "40%",
        sortable: true,
        style: {
          padding: "10px 15px",
          justifyContent:"center"
        }
      }
    ]
  
    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Project" />
  
        <div>
          <DataTable
          title = "LIST OF PROJECT"
          columns={columns}
          data = {filterProject}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link to={`/project/add`}>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
            hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
              ADD PROJECT
            </button>
          </Link>}
          subHeader
          subHeaderComponent=
          {<input value={search} placeholder="Search"
            onChange = {(e) => setSearch(e.target.value)}
            type="text" id="simple-search" class="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-64 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>}
          subHeaderAlign = 'right'
          customStyles={customStyles}
          />
        </div>
      </div>
    );
  };

export default Project