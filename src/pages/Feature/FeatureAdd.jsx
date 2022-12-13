import React from 'react'
import { useState, useEffect } from 'react';
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

  const title = "ADDING FEATURE FOR " + state.code

  const [featureName, setFeatureName] = useState({
    label: "",
    value: ""
  })

  const [featureList, setFeatureList] = useState({
    label: "",
    value: ""
  })

  const [addStatus, setAddStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  /*get features list*/
  useEffect(() => {
    const getFeatures = async () => {
      const featuresFromServer = await fetchFeature()
      setFeatureList(featuresFromServer)
    }
    getFeatures()
  }, [])

  const fetchFeature = async () => {
    const url_features_list = "http://localhost/admin_api/public/api/v1/feature/" + id
    const res = await fetch(url_features_list)
    const data = await res.json()
    return data['data']
  }

  const dataFeature = [
    { label: "Internet", value: "Internet" },
    { label: "Refigerator", value: "Refigerator" },
    { label: "Balcony", value: "Balcony" },
    { label: "Parking", value: "Parking" },
    { label: "Swimming Pool", value: "Swimming Pool" },
    { label: "Cable Television", value: "Cable Television" },
    { label: "Air Condition", value: "Air Condition" },
    { label: "General Power", value: "General Power" },
    { label: "Convenient Store 24/24", value: "Convenient Store 24/24" },
    { label: "Fully Furnished", value: "Fully Furnished" },
    { label: "Telephone", value: "Telephone" },
    { label: "Water Heater", value: "Water Heater" },
    { label: "Security 24/24", value: "Security 24/24" },
    { label: "Garden", value: "Garden" },
    { label: "Gym", value: "Gym" }
  ]

  /*get current feature*/
  const dataFeatureFromServer = []
  for (let i = 0; i < featureList.length; i++) {
    dataFeatureFromServer.push({
      label: featureList[i].feature_name,
      value: featureList[i].feature_name
    })
  }
  /*----------------*/

  //filter current feature with feature selection to get unadded feature 
  let dataServer = dataFeatureFromServer.map(itemServer => { return itemServer.label; });
  let dataAvailable = dataFeature.filter(itemAvailable => !dataServer.includes(itemAvailable.label));
  /*--------------*/

  const addingFeature = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "http://localhost/admin_api/public/api/v1/feature"

    formData.append("id_apartment", id)
    formData.append("feature_name", featureName.value)

    axios.post(url_add, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setAddStatus(res["data"]["message"])
        let new_data = {
          label: featureName.label,
          value: featureName.value
        }
        console.log(res)
      })
      .catch(error => {
        console.log(error)
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
              options={dataAvailable}
              onChange={setFeatureName}
            />
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