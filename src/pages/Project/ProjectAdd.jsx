import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { useStateContext } from './../../contexts/ContextProvider';

const ProjectAdd = () => {

  const { currentColor } = useStateContext();

  const [showElement, setShowElement] = useState(true)

  const [projectName, setProjectName] = useState("")
  const [projectImage, setProjectImage] = useState("")
  const [projectStatus, setProjectStatus] = useState("normal")

  const [addStatus, setAddStatus] = useState("")
  const [errorName, setErrorName] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const addingProject = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "https://api.betterhomes.site/public/api/v1/project"

    formData.append("project_name", projectName)
    formData.append("project_image", projectImage)
    formData.append("project_status", projectStatus)

    axios.post(url_add, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setErrorName("")
        setErrorImage("")
        setShowElement(true)
        setAddStatus(res["data"]["message"])
      })
      .catch(error => {
        console.log(error)
        if (error['response']['data']['errors']['project_name']) {
          setErrorName(error['response']['data']['errors']['project_name'][0])
        }
        else {
          setErrorName("")
        }

        if (error['response']['data']['errors']['project_image']) {
          setErrorName(error['response']['data']['errors']['project_image'][0])
        }
        else {
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
          style={{ backgroundColor: currentColor }}
          class="mb-6 bg-transparent text-white font-semibold 
          py-2 px-4 border rounded">
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
              placeholder='Project name'
              class="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
              focus:bg-white"/>

            <div style={{ color: "#f43f5e" }}>
              {errorName}
            </div>

          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Project Image
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={(e) => setProjectImage(e.target.value)}
              type="text"
              placeholder='Project image'
              class="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
              focus:bg-white"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Project Status
            </label>
          </div>
          <div class="md:w-2/3">
            <div class="relative">
              <select
                onChange={(e) => setProjectStatus(e.target.value)}
                class="block appearance-none w-full bg-gray-200 border border-gray-200 
                text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                focus:bg-white focus:border-gray-500">
                <option selected value="Normal">Normal</option>
                <option value="Hot">Hot</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <div className='mb-4' style={{ color: corlorMessage }}>
              {showElement ? addStatus : <></>}
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              onClick={(e) => addingProject(e)}
              class="shado focus:shadow-outline 
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