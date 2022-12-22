import { useState, useEffect } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import Select from 'react-select';
import Cleave from 'cleave.js/react';

const ServiceApartEdit = () => {

  const [showElement, setShowElement] = useState(true)

  const { id } = useParams()
  const url_apart_by_id = "http://localhost/admin_api/public/api/v1/serviceapart/" + id

  const [projectList, setProjectList] = useState([])

  /*all property of service apartment*/
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
  const [description, setDescription] = useState("")
  /*------------------------------*/

  /*get service apartment by id*/
  useEffect(() => {
    const getServiceApartByID = async () => {
      const serviceApartFromServer = await fetchServiceApart()
      setApartCode(serviceApartFromServer["apartment_code"])
      setImage(serviceApartFromServer["image"])
      setNote(serviceApartFromServer["note"])
      setProjectName({
        label: serviceApartFromServer["project_name"],
        value: serviceApartFromServer["id_project"]
      })
      setAddress(serviceApartFromServer["address"])
      setPrice(numberWithCommas(serviceApartFromServer["price"]))
      setAvailableFrom(formatDate(serviceApartFromServer["available_from"]))
      setStatus({
        label: serviceApartFromServer["status"],
        value: serviceApartFromServer["status"]
      })
      setDescription(serviceApartFromServer["description"])
    }
    getServiceApartByID()
  }, [])

  const fetchServiceApart = async () => {
    const res = await fetch(url_apart_by_id)
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  const [editStatus, setEditStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  /*error area*/
  const [errorApartCode, setErrorApartCode] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [errorAddress, setErrorAddress] = useState("")
  /*---------*/

  /*formating data*/
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatDate(inputDate) {

    const dateArray = inputDate.split('-')
    const formatedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]

    return formatedDate
  }
  /*------------------*/

  const editingApart = (e) => {

    e.preventDefault()

    let price_add = parseInt(price.replaceAll(',', ''));

    let dataSend = {
      id_project: projectName.value,
      apartment_code: apartCode,
      price: price_add,
      address: address,
      image: image,
      description: description,
      status: status.value,
      available_from: availableFrom,
      note: note,
      address: address,
      purpose: "service_apart"
    }

    axios.patch(url_apart_by_id, dataSend)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setErrorApartCode("")
        setErrorImage("")
        setErrorAddress("")
        setShowElement(true)
        setEditStatus(res["data"]["message"])
      })
      .catch(error => {

        if (error['response']['data']['errors']['apartment_code']) {
          setErrorApartCode(error['response']['data']['errors']['apartment_code'][0])
        }
        else {
          setErrorApartCode("")
        }

        if (error['response']['data']['errors']['image']) {
          setErrorImage(error['response']['data']['errors']['image'][0])
        }
        else {
          setErrorImage("")
        }

        if (error['response']['data']['errors']['address']) {
          setErrorAddress(error['response']['data']['errors']['address'][0])
        }
        else {
          setErrorAddress("")
        }

      });
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
    const url_project_list = "http://localhost/admin_api/public/api/v1/project"
    const res = await fetch(url_project_list)
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

      <Header category="Page" title="Service Apartment" />

      <div className='text-2xl mb-2'>ADDING SERVICE APARTMENT</div>
      <Link to={'/serviceapart'}>
        <button
          class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Service Apart list
        </button>
      </Link>

      <form 
      onClick={(e) => setShowElement(false)}
      class="w-full max-w-full">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apart Code
            </label>
            <input
              value={apartCode}
              type="text"
              onChange={(e) => setApartCode(e.target.value)}
              placeholder="Apartment Code"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorApartCode}
            </div>

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <input
              value={image}
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

            <img style={{ width: "15%" }} src={image} alt="news-image-item" />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Note
            </label>
            <input
              value={note}
              type="text"
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project
            </label>
            <Select
              options={dataProject}
              value={projectName}
              onChange={setProjectName}
            />

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              value={address}
              type="text" onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
            <div style={{ color: "#f43f5e" }}>
              {errorAddress}
            </div>

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>

            <NumericFormat
              value={price}
              className="currency"
              placeholder='Price'
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              thousandSeparator=","
              onChange={(e) => setPrice(e.target.value)}
            />

          </div>

        </div>

        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Available From
            </label>
            <Cleave
              value={availableFrom}
              placeholder='Available from'
              onChange={(e) => setAvailableFrom(e.target.value)}
              options={{
                date: true,
                delimiter: '-',
                datePattern: ['d', 'm', 'Y']
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Status
            </label>
            <Select
              options={dataStatus}
              value={status}
              onChange={setStatus}
            />

          </div>

        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2" for="grid-city">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Write description here..."
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
              border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >

            </textarea>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <div className='mb-2' style={{ color: corlorMessage }}>
              {showElement?editStatus:<></>} 
            </div>
            <button onClick={(e) => editingApart(e)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ADDING APART
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}
export default ServiceApartEdit