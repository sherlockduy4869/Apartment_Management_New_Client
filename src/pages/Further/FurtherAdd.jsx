import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FurtherAdd = () => {

  const [showElement, setShowElement] = useState(true)

  const { id } = useParams()
  const { state } = useLocation()
  const pathBack = '/further/' + id

  const title = "ADDING FURTHER FOR " + state.code

  const [numBed, setNumBed] = useState("")
  const [numPath, setNumPath] = useState("")
  const [sqft, setSQFT] = useState("")
  const [type, setType] = useState("")
  const [yearBuild, setYearBuild] = useState("")
  const [parking, setParking] = useState("")
  const [heating, setHeating] = useState("")
  const [lot, setLot] = useState("")

  const [addStatus, setAddStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("#22c55e")

  const addingFurther = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "http://localhost/admin_api/public/api/v1/further"

    formData.append("id_apartment", id)
    formData.append("num_beds", numBed)
    formData.append("num_baths", numPath)
    formData.append("sqft", sqft)
    formData.append("type", type)
    formData.append("year_built", yearBuild)
    formData.append("parking", parking)
    formData.append("heating", heating)
    formData.append("lot", lot)
    
    axios.post(url_add, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setShowElement(true)
        setAddStatus(res["data"]["message"])
      })
      .catch(error => {
        setColorMessage("#f43f5e")
        setShowElement(true)
        setAddStatus(error['response']['data']['errors']['id_apartment'])
      });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <Header category="Page" title="Further" />

      <div className='text-2xl mb-2'>{title}</div>
      <Link 
      to={pathBack}
      state={{purpose:state.purpose, code: state.code}}
      >
        <button
          class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Further list
        </button>
      </Link>

      <form 
      onClick={(e) => setShowElement(false)}
      class="w-full max-w-full">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Num Beds
            </label>
            <input
              type="number"
              onChange={(e) => setNumBed(e.target.value)}
              placeholder="Number of beds"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Num Paths
            </label>
            <input
              type="number"
              onChange={(e) => setNumPath(e.target.value)}
              placeholder="Number of paths"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              SQFT
            </label>
            <input
              type="number"
              onChange={(e) => setSQFT(e.target.value)}
              placeholder="Sqft"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type
            </label>
            <input
              type="text"
              onChange={(e) => setType(e.target.value)}
              placeholder="Type"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Year Build
            </label>
            <input
              type="number"
              onChange={(e) => setYearBuild(e.target.value)}
              placeholder="Year build"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Parking
            </label>
            <input
              type="text"
              onChange={(e) => setParking(e.target.value)}
              placeholder="Parking"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Heating
            </label>
            <input
              type="text"
              onChange={(e) => setHeating(e.target.value)}
              placeholder="Heating"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Lot
            </label>
            <input
              type="text"
              onChange={(e) => setLot(e.target.value)}
              placeholder="Lot"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <div className='mb-2' style={{ color: corlorMessage }}>
              {showElement?addStatus:<></>} 
            </div>
            <button onClick={(e) => addingFurther(e)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ADDING FURTHER
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default FurtherAdd