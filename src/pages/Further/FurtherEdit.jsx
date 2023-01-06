import { useState, useEffect } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useStateContext } from './../../contexts/ContextProvider';

const FurtherEdit = () => {

  const { currentColor } = useStateContext();

  const [showElement, setShowElement] = useState(true)

  const { id } = useParams()
  const { state } = useLocation()
  const pathBack = '/further/' + id

  const [further, setFurther] = useState([])

  const [idFurther, setIdFurther] = useState("")
  const [numBed, setNumBed] = useState("")
  const [numPath, setNumPath] = useState("")
  const [sqft, setSQFT] = useState("")
  const [type, setType] = useState("")
  const [yearBuild, setYearBuild] = useState("")
  const [parking, setParking] = useState("")
  const [heating, setHeating] = useState("")
  const [lot, setLot] = useState("")

  const [editStatus, setEditStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  /*get further*/
  useEffect(() => {
    const getFurther = async () => {
      const furtherFromServer = await fetchFurther()
      setFurther(furtherFromServer)
      setIdFurther(furtherFromServer['id_further'])
      setNumBed(furtherFromServer['num_beds'])
      setNumPath(furtherFromServer['num_baths'])
      setSQFT(furtherFromServer['sqft'])
      setType(furtherFromServer['type'])
      setYearBuild(furtherFromServer['year_built'])
      setParking(furtherFromServer['parking'])
      setHeating(furtherFromServer['heating'])
      setLot(furtherFromServer['lot'])
    }
    getFurther()
  }, [])

  const fetchFurther = async () => {
    const url_further = "https://api.betterhomes.site/public/api/v1/further/" + id
    const res = await fetch(url_further)
    const data = await res.json()
    return data['data']
  }

  const editingFuther = (e) => {

    e.preventDefault()

    const url_edit = "https://api.betterhomes.site/public/api/v1/further/" + idFurther

    let dataSend = {
      id_apartment: id,
      num_beds: numBed,
      num_baths: numPath,
      sqft: sqft,
      type: type,
      year_built: yearBuild,
      parking: parking,
      heating: heating,
      lot: lot
    }
    
    axios.patch(url_edit, dataSend)
        .then(res => {
          console.log(res)
          if (!res["data"]["status"]) {
            setColorMessage("#f43f5e")
          }
          setColorMessage("#22c55e")
          setShowElement(true)
          setEditStatus(res["data"]["message"])
        })
        .catch(error => {
          console.log(error)
        });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <Header category="Page" title="Further" />

      <div className='text-2xl mb-2'>EDITING FURTHER</div>
      <Link 
      to={pathBack}
      state={{purpose:state.purpose, code: state.code}}
      >
        <button
          style={{ backgroundColor: currentColor }}
          class="mb-6 font-semibold text-white py-2 px-4 rounded">
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
              value={numBed}
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
              value={numPath}
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
              value={sqft}
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
              value={type}
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
              value={yearBuild}
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
              value={parking}
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
              value={heating}
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
              value={lot}
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
              {showElement?editStatus:<></>} 
            </div>
            <button 
              onClick={(e) => editingFuther(e)}
              style={{ backgroundColor: currentColor }}
              class="text-white font-bold py-2 px-4 rounded">
              EDITING FURTHER
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default FurtherEdit