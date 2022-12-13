import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Select from 'react-select';

const FeatureAdd = () => {

  const { id } = useParams()
  const { state } = useLocation()
  const pathBack = '/feature/' + id

  console.log(pathBack)

  const title = "ADDING FEATURE FOR " + state.code

  const [featureName, setFeatureName] = useState({
    label: "",
    value: ""
  })

  const [addStatus, setAddStatus] = useState("")
  const [errorFeature, setErrorFeature] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const dataFeature = [
    { label: "Internet", value: "Internet" },
    { label: "Refigerator", value: "Refigerator" },
    { label: "Balcony", value: "Balcony" },
    { label: "Parking", value: "Parking" },
    { label: "Swimming Pool", value: "Swimming_Pool" },
    { label: "Cable Television", value: "Cable_Television" },
    { label: "Air Condition", value: "Air_Condition" },
    { label: "General Power", value: "General_Power" },
    { label: "Convenient Store 24/24", value: "Convenient_Store_24/24" },
    { label: "Fully Furnished", value: "Fully_Furnished" },
    { label: "Telephone", value: "Telephone" },
    { label: "Water Heater", value: "Water_Heater" },
    { label: "Security 24/24", value: "Security_24/24" },
    { label: "Garden", value: "Garden" },
    { label: "Gym", value: "Gym" }
  ]

  const addingFeature = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "http://localhost/admin_api/public/api/v1/feature"

    formData.append("feature_name", featureName)

    axios.post(url_add, formData)
      .then(res => {
        // if (!res["data"]["status"]) {
        //   setColorMessage("#f43f5e")
        // }
        // setColorMessage("#22c55e")
        // setErrorName("")
        // setAddStatus(res["data"]["message"])
      })
      .catch(error => {
        // if (error['response']['data']['errors']['project_name']) {
        //   setErrorName(error['response']['data']['errors']['project_name'][0])
        // }
      });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Feature" />

      <div className='text-2xl mb-2'>{title}</div>
      <Link
        to={pathBack}
        state={{ purpose: state.purpose, code: state.code }}>
        <button
          class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Feature List
        </button>
      </Link>

      <form class="w-full max-w-sm">

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Feature
            </label>
          </div>
          <div class="md:w-2/3">
            <Select
              options={dataFeature}
              defaultValue={dataFeature[0]}
              onChange={setFeatureName}
            />

            <div style={{ color: "#f43f5e" }}>
              {errorFeature}
            </div>

          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <div className='mb-4' style={{ color: corlorMessage }}>
              {addStatus}
            </div>
            <button
              type="button"
              onClick={(e) => addingFeature(e)}
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

export default FeatureAdd