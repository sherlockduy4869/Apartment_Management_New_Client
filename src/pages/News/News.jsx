import React from 'react'
import { Header } from '../../components';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles } from '../../data/dummy';

const News = () => {

  const [newsList, setNewsList] = useState([])
  const [search, setSearch] = useState("")
  const [filterNews, setFilterNews] = useState([])

  /*get news list*/
  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews()
      setNewsList(newsFromServer)
      setFilterNews(newsFromServer)
    }
    getNews()
  }, [])

  const fetchNews = async () => {
    const url_news_list = "http://localhost/admin_api/public/api/v1/news"
    const res = await fetch(url_news_list)
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  /*sorting news list*/
  useEffect(() => {
    const result = newsList.filter(newsList => {
      return newsList.title_news.toLowerCase().match(search.toLowerCase())
        || newsList.author_news.toLowerCase().match(search.toLowerCase())
    })
    setFilterNews(result)
  }, [search])
  /*------------------*/

  const deleteNews = async (id) => {
    const url_delete = "http://localhost/admin_api/public/api/v1/news/" + id
    await fetch(url_delete, { method: `DELETE` })
    setNewsList(newsList.filter((newsList) => newsList.id_news !== id))
    setFilterNews(filterNews.filter((filterNews) => filterNews.id_news !== id))
  }

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Title",
      selector: 'title_news',
      cell: (row) => <div>{row.title_news}</div>,
      width: "20%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Image",
      selector: (row) => <img style={{ width: "70%" }} src={row.image_news} alt="news-item" />,
      width: "30%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Author",
      sortable: true,
      selector: 'author_news',
      cell: (row) => <div className="py-1 px-2 capitalize font-medium text-md">
        {row.author_news}
      </div>,
      width: "20%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      }
    },
    {
      name: "Customize",
      cell: (row) =>
        <span>
          <button
            style={{ background: '#ee5e68' }}
            className="text-white py-1 px-2 capitalize rounded-2xl text-md mr-1"
            onClick={() => { if (window.confirm('Are you sure to delete this item?')) deleteNews(row.id_news) }}>
            Delete
          </button>
          <Link to={`/news/edit/${row.id_news}`}>
            <button className="text-white py-1 px-2 capitalize rounded-2xl text-md bg-indigo-500">
              Editing
            </button>
          </Link>
        </span>,
      width: "20%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    }
  ]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="News" />

      <div>
        <DataTable
          title="LIST OF NEWS"
          columns={columns}
          data={filterNews}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link to={`/news/add`}>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
            hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
              ADD NEWS
            </button>
          </Link>}
          subHeader
          subHeaderComponent=
          {<input
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-2.5  
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>}
          subHeaderAlign='right'
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}
export default News