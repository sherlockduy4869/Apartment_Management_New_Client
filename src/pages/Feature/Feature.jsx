import { Header } from '../../components';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles } from '../../data/dummy';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useStateContext } from './../../contexts/ContextProvider';

const Feature = () => {

  const { currentColor } = useStateContext();

  const { id } = useParams()
  const { state } = useLocation()

  const path = state.purpose

  const titleFeature = "Features Of " + state.code

  const [featureList, setFeatureList] = useState([])
  const [search, setSearch] = useState("")
  const [filterFeature, setFilterFeature] = useState([])

  /*get features list*/
  useEffect(() => {
    const getFeatures = async () => {
      const featuresFromServer = await fetchFeature()
      setFeatureList(featuresFromServer)
      setFilterFeature(featuresFromServer)
    }
    getFeatures()
  }, [])

  const fetchFeature = async () => {
    const url_features_list = "https://api.betterhomes.site/public/api/v1/feature/" + id 
    const res = await fetch(url_features_list)
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  /*sorting features list*/
  useEffect(() => {
    const result = featureList.filter(featureList => {
      return featureList.feature_name.toLowerCase().match(search.toLowerCase())
    })
    setFilterFeature(result)
  }, [search])
  /*------------------*/

  const deleteFeature = async (id) => {
    const url_delete = "https://api.betterhomes.site/public/api/v1/feature/" + id
    await fetch(url_delete, { method: `DELETE` }).then(res => {
      console.log(res)
    })
    setFeatureList(featureList.filter((featureList) => featureList.id_feature !== id))
    setFilterFeature(filterFeature.filter((filterFeature) => filterFeature.id_feature !== id))
  }

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "20%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Feature Name",
      selector: 'feature_name',
      cell: (row) => <div>{row.feature_name}</div>,
      width: "40%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Customize",
      cell: (row) =>
        <button
          style={{ background: '#ee5e68' }}
          className="text-white py-1 px-2 capitalize rounded-2xl text-md mr-1"
          onClick={() => 
          { if (window.confirm('Are you sure to delete this item?')) deleteFeature(row.id_feature) }}>
          Delete
        </button>,
      width: "40%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    }
  ]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Feature" />
      <Link to={path}>
        <button 
        style={{ backgroundColor: currentColor }}
        class="mb-2 font-semibold text-white py-2 px-4 rounded">
          BACK TO APARTMENT
        </button>
      </Link>
      <div>
        <DataTable
          title={titleFeature}
          columns={columns}
          data={filterFeature}
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link 
          to={`/feature/add/${id}`}
          state={{purpose:state.purpose, code: state.code}}
          >
            <button
              style={{ backgroundColor: currentColor }}
              className='font-semibold text-white py-1 px-2 rounded'>
              ADD FEATURES
            </button>
          </Link>}
          subHeader
          subHeaderComponent=
          {<input
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-2.5  
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>}
          subHeaderAlign='right'
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Feature