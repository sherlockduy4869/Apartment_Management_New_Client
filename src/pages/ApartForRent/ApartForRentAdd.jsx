import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import Select from 'react-select';

import ReactDOM from 'react-dom';
import Cleave from 'cleave.js/react';

const ApartForRentAdd = () => {

  const url = "http://localhost/admin_api/public/api/v1/news";

  const [projectList, setProjectList] = useState([])

  /*all property of apart for rent*/
  const [apartCode, setApartCode] = useState("")
  const [image, setImage] = useState("")
  const [note, setNote] = useState("")
  const [projectName, setProjectName] = useState({
    label: "",
    value: ""
  })
  const [address, setAddress] = useState("")
  const [price, setPrice] = useState("")
  const [availableFrom, setAvailableFrom] = useState("")
  const [status, setStatus] = useState({
    label: "",
    value: ""
  })
  // console.log(typeof(parseInt(price.replaceAll(',',''))))
  const [description, setDescription] = useState("")
  /*------------------------------*/

  const [addStatus, setAddStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  /*error area*/
  const [errorTitle, setErrorTitle] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [errorAuthor, setErrorAuthor] = useState("")
  const [errorDescription, setErrorDescription] = useState("")
  /*---------*/

  const addingNews = (e) => {

    e.preventDefault()

    // const formData = new FormData()

    // formData.append("title_news", title)
    // formData.append("image_news", image)
    // formData.append("author_news", author)
    // formData.append("description_news", description)

    // axios.post(url, formData)
    //   .then(res => {
    //     if (!res["data"]["status"]) {
    //       setColorMessage("#f43f5e")
    //     }
    //     setColorMessage("#22c55e")
    //     setErrorTitle("")
    //     setErrorImage("")
    //     setErrorAuthor("")
    //     setErrorDescription("")
    //     setAddStatus(res["data"]["message"])
    //   })
    //   .catch(error => {

    //     if (error['response']['data']['errors']['title_news']) {
    //       setErrorTitle(error['response']['data']['errors']['title_news'][0])
    //     }
    //     else {
    //       setErrorTitle("")
    //     }

    //   });
  }

  /*get project list*/
  useEffect(() => {
    const getProject = async () => {
      const projectFromServer = await fetchProject()
      setProjectList(projectFromServer)
    }
    getProject()
  }, [])

  const fetchProject = async () => {
    const res = await fetch('http://localhost/admin_api/public/api/v1/project')
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  /*set selection data*/
  const dataProject = []

  for (let i = 0; i < projectList.length; i++) {
    dataProject.push({
      label: projectList[i].project_name,
      value: projectList[i].id_project
    })
  }

  const dataStatus = [
    { label: "Normal", value: "Normal" },
    { label: "Noticable", value: "Noticable" }
  ]
  /*----------------*/

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <Header category="Page" title="Apartment For Rent" />

      <div className='text-2xl mb-2'>ADDING APARTMENT FOR RENT</div>
      <Link to={'/apartforrent'}>
        <button class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Apart For Rent list
        </button>
      </Link>

      <form class="w-full max-w-full">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apart Code
            </label>
            <input type="text" onChange={(e) => setApartCode(e.target.value)} placeholder="Apartment Code"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorAuthor}
            </div>

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
              rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Note
            </label>
            <input type="text" onChange={(e) => setNote(e.target.value)} placeholder="Note"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project
            </label>
            <Select
              options={dataProject}
              onChange={setProjectName}
            />

            <div style={{ color: "#f43f5e" }}>
              {errorAuthor}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Address"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>

            <NumericFormat
              className="currency"
              customInput={TextField}
              thousandSeparator="," 
              onChange={(e) => setPrice(e.target.value)}
              />

            <div style={{ color: "#f43f5e" }}>
              {errorAuthor}
            </div>

          </div>

        </div>

        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Available From
            </label>
            <Cleave
              onChange={(e) => setAvailableFrom(e.target.value)}
              options={{
                date: true,
                delimiter: '-',
                datePattern: ['d', 'm', 'Y']
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Status
            </label>
            <Select
              options={dataStatus}
              onChange={setStatus}
            />

            <div style={{ color: "#f43f5e" }}>
              {errorAuthor}
            </div>

          </div>

        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2" for="grid-city">
              Description
            </label>

            <textarea onChange={(e) => setDescription(e.target.value)}
            rows="4" placeholder="Write description here..."
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >

            </textarea>

            <div style={{ color: "#f43f5e" }}>
              {errorDescription}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <div className='mb-2' style={{ color: corlorMessage }}>
              {addStatus}
            </div>
            <button onClick={(e) => addingNews(e)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ADDING APART
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default ApartForRentAdd