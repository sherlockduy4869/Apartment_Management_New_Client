import { Header } from '../../components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useStateContext } from './../../contexts/ContextProvider';

const Further = () => {

  const { currentColor } = useStateContext();

  const { id } = useParams()
  const { state } = useLocation()

  const [further, setFurther] = useState([])
  
  const path = state.purpose

  const titleFurther = "Further Of " + state.code

  /*get further*/
  useEffect(() => {
    const getFurther = async () => {
      const furtherFromServer = await fetchFurther()
      setFurther(furtherFromServer)
    }
    getFurther()
  }, [])

  const fetchFurther = async () => {
    const url_further = "http://localhost/admin_api/public/api/v1/further/" + id
    const res = await fetch(url_further)
    const data = await res.json()
    return data['data']
  }
  
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Further" />
      <Link to={path}>
        <button 
        style={{ backgroundColor: currentColor }}
        class="mb-2 font-semibold text-white py-2 px-4 rounded">
          BACK TO APARTMENT
        </button>
      </Link>
      <div class='flex justify-between'>
        <div>
          {titleFurther}
        </div>
        {further['id_further'] !== undefined ? ("") : 
        (<Link 
        to={`/further/add/${id}`}
        state={{purpose:state.purpose, code: state.code}}
        >
        <button 
        style={{ backgroundColor: currentColor }}
        class="mb-2font-semibold text-white py-2 px-4 rounded">
          ADDING
        </button>
        </Link>)}
      </div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table 
              className='tbl_futher' 
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead 
              class="text-xs text-gray-700 uppercase bg-gray-50 
              dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Beds
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Baths
                  </th>
                  <th scope="col" class="py-3 px-6">
                    SQFT
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Type
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Year
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Parking
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Heating
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Lot
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Customize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">
                    {further['num_beds']}
                  </td>
                  <td class="py-4 px-6">
                    {further['num_baths']}
                  </td>
                  <td class="py-4 px-6">
                    {further['sqft']}
                  </td>
                  <td class="py-4 px-6">
                    {further['type']}
                  </td>
                  <td class="py-4 px-6">
                    {further['year_built']}
                  </td>
                  <td class="py-4 px-6">
                    {further['parking']}
                  </td>
                  <td class="py-4 px-6">
                    {further['heating']}
                  </td>
                  <td class="py-4 px-6">
                    {further['lot']}
                  </td>
                  <td class="py-4 px-6">
                    {further['id_further'] !== undefined ? 
                    (<Link 
                      to={`/further/edit/${id}`}
                      state={{purpose:state.purpose, code: state.code}}>
                      <button 
                        style={{ backgroundColor: currentColor }}
                        className="text-white py-1 px-2 capitalize rounded-2xl text-md ">
                        Editing
                      </button>
                    </Link>) : ('')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Further