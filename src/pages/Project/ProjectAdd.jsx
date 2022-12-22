import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';

const ProjectAdd = () => {

  const [showElement, setShowElement] = useState(true)

  const [projectName, setProjectName] = useState("")

  const [addStatus, setAddStatus] = useState("")
  const [errorName, setErrorName] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const addingProject = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "http://localhost/admin_api/public/api/v1/project"

    formData.append("project_name", projectName)

    axios.post(url_add, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setErrorName("")
        setShowElement(true)
        setAddStatus(res["data"]["message"])
      })
      .catch(error => {
        if (error['response']['data']['errors']['project_name']) {
          setErrorName(error['response']['data']['errors']['project_name'][0])
        }
        else{
          setErrorName("")
        }
      });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Project" />

      <div className='text-2xl mb-2'>ADDING PROJECT</div>
      <Link to={'/project'}>
        <button
          class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Project List
        </button>
      </Link>

      <form 
      onClick={(e) => setShowElement(false)}
      class="w-full max-w-sm">

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Project Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={(e) => setProjectName(e.target.value)}
              type="text"
              class="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
              focus:bg-white focus:border-purple-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorName}
            </div>

          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <div className='mb-4' style={{ color: corlorMessage }}>
              {showElement?addStatus:<></>} 
            </div>
            <button
              type="button"
              onClick={(e) => addingProject(e)}
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline 
              focus:outline-none text-white font-bold py-2 px-4 rounded">
              ADDING
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default ProjectAdd