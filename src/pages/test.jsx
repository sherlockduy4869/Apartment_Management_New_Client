// import React from 'react';
// import { Header } from '../components';
// import {useState, useEffect} from 'react';
// import _ from "lodash"

// const Slider = () => {

//   const [slider,setSlider] = useState([])
//   const [order, setOrder] = useState("ASC")
//   const [search, setSearch] = useState("")
//   const [paginateSlider, setPaginateSlider] = useState()
//   const [currentPage, setCurrentPage] = useState()
//   const pageSize = 2

//   const sorting = (col) => {
//     if(col === "id_slider"){
//       if(order === "ASC"){
//         const sorted = [...slider].sort((a,b)=>
//         a["id_slider"] > b["id_slider"] ? 1 : -1)
//         setSlider(sorted)
//         setOrder("DSC")
//       }
  
//       if(order === "DSC"){
//         const sorted = [...slider].sort((a,b)=>
//         a["id_slider"] < b["id_slider"] ? 1 : -1)
//         setSlider(sorted)
//         setOrder("ASC")
//       }
//     }
//     else{
//       if(order === "ASC"){
//         const sorted = [...slider].sort((a,b)=>
//         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
//         setSlider(sorted)
//         setOrder("DSC")
//       }
  
//       if(order === "DSC"){
//         const sorted = [...slider].sort((a,b)=>
//         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
//         setSlider(sorted)
//         setOrder("ASC")
//       }
//     }
//     //alert(col)
//   }

//   // const pageCount = slider? Math.ceil(slider.length/pageSize) : 0

//   // const pages = _.range(1, pageCount+1)

//   // const pagination = (page) => {
//   //   setCurrentPage(page)
//   //   const startIndex = (page - 1) * pageSize
//   //   const paginateSlider = _(slider).slice(startIndex).take(pageSize).value()
//   //   setPaginateSlider(paginateSlider)
//   // }

//   useEffect(()=>{
//     const getSlider = async () => {
//       const sliderFromServer = await fetchSlider()
//       setSlider(sliderFromServer)
//       setPaginateSlider(_(sliderFromServer).slice(0).take(pageSize).value())
//     }
//     getSlider()
//   },[])

//   const fetchSlider = async () =>{
//     const res = await fetch('http://midternapi.atwebpages.com/public/api/v1/sliders')
//     const data = await res.json()
//     return data['data']
//   }

//   const deleteSlider = async (id) =>{
//     await fetch(`http://midternapi.atwebpages.com/public/api/v1/sliders/${id}`, {method: `DELETE`})
//     setSlider(slider.filter((slider) => slider.id_slider !== id))
//   }

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Slider" />
//       <button
//       type='button'
//       style={{backgroundColor:'green', borderRadius:"10px", color:'white', marginBottom:'20px'}}
//       className={`p-2`}>
//       Add Slider
//       </button>
//       <input
//       type= "text"
//       placeholder="Search..."
//       onChange={(e) => {
//         setSearch(e.target.value)
//       }}
//       />

//       <div>
//         {
//           !slider ? ("No data found") : (

//           <table id='tbl_data' width="100%" >
//             <thead>
//                     <th onClick={() => sorting("id_slider")}  
//                     style={{fontSize:'14px', background:'#f9fafb', cursor:"pointer"}}
//                     className='text-center uppercase font-[400] p-4'>ID</th>
    
//                     <th 
//                     style={{fontSize:'14px', background:'#f9fafb', cursor:"pointer"}}
//                     className='text-center uppercase font-[400] p-4'>Image</th>
    
//                     <th onClick={() => sorting("note_slider")}  
//                     style={{fontSize:'14px', background:'#f9fafb', cursor:"pointer"}}
//                     className='text-center uppercase font-[400] p-4'>Note</th>
    
//                     <th onClick={() => sorting("status_slider")}  
//                     style={{fontSize:'14px', background:'#f9fafb', cursor:"pointer"}}
//                     className='text-center uppercase font-[400] p-4'>Status</th>
    
//                     <th 
//                     style={{fontSize:'14px', background:'#f9fafb', cursor:"pointer"}}
//                     className='text-center uppercase font-[400] p-4'>Customize</th>
//             </thead>
//             <tbody>
//                 {slider.filter((val)=>{
//                   if(search === ""){
//                     return val;
//                   }else if(val.note_slider.toLowerCase().includes(search.toLowerCase())||
//                           val.status_slider.toLowerCase().includes(search.toLowerCase())){
//                     return val
//                   }
    
//                 }).map((sld, index) =>(
                    
//                     <tr style={{borderBottom: "1px solid #eef0f3"}}>
    
//                         <td 
//                         style={{padding:"10px 15px"}}
//                         class="people text-center">
//                             <div class="people-de">
//                                 <p>{index+1}</p>
//                             </div>
//                         </td>
    
//                         <td 
//                         style={{padding:"10px 15px"}}
//                         class="people-de text-center">
//                             <img 
//                             className="rounded-xl h-20 md:ml-3" 
//                             src={sld.image_slider} 
//                             alt="slider-item" />
//                         </td>
    
//                         <td 
//                         style={{padding:"10px 15px"}}
//                         class="role text-center">
//                             <p>{sld.note_slider}</p>
//                         </td>
    
//                         <td 
//                         style={{padding:"10px 15px"}}
//                         class="role text-center">
//                             <p 
//                             style={{ background: '#FB9678' }}
//                             className="text-white py-1 px-2 capitalize rounded-2xl text-md">
//                                 {sld.status_slider}
//                             </p>
//                         </td>
    
//                         <td
//                         style={{padding:"10px 15px"}}
//                         class="edit text-center">
//                             <button type="button"
//                             onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) 
//                             deleteSlider(sld.id_slider) } }
//                             style={{ background: '#ee5e68' }}
//                             className="text-white py-1 px-2 capitalize rounded-2xl text-md">
//                                 Delete
//                             </button>
//                         </td>
    
//                     </tr>
//                 ))}
//             </tbody>
//           </table>
//           ) 
//         }

//         {/* <nav aria-label="Page navigation example">
//           <ul class="inline-flex items-center -space-x-px">
//             <li>
//               <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span class="sr-only">Previous</span>
//                 <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//               </a>
//             </li>
//                 {
//                   pages.map((page)=>(
//                     <li>
//                     <a onClick={() => pagination(page)} 
//                     href="#" class={
//                       page === currentPage ? "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" 
//                       : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                     }>
//                     {page}
//                     </a>
//                     </li>
//                   ))
//                 }
                
//             <li>
//               <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span class="sr-only">Next</span>
//                 <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
//               </a>
//             </li>
//           </ul>
//         </nav> */}

//       </div>
//     </div>
//   );
// };
// export default Slider;
