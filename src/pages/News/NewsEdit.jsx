import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useStateContext } from './../../contexts/ContextProvider';

const NewsEdit = () => {

  const { currentColor } = useStateContext();

  const [showElement, setShowElement] = useState(true)

  const { id } = useParams()
  const url_edit = "https://api.betterhomes.site/public/api/v1/news/" + id;

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [intro, setIntro] = useState("")
  const [description, setDescription] = useState("")

  const [editStatus, setEditStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const [errorTitle, setErrorTitle] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [errorAuthor, setErrorAuthor] = useState("")
  const [errorIntro, setErrorIntro] = useState("")
  const [errorDescription, setErrorDescription] = useState("")

  /*get news by id*/
  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews()
      setTitle(newsFromServer["title_news"])
      setImage(newsFromServer["image_news"])
      setAuthor(newsFromServer["author_news"])
      setIntro(newsFromServer["intro_news"])
      setDescription(newsFromServer["description_news"])
    }
    getNews()
  }, [])

  const fetchNews = async () => {
    const res = await fetch(url_edit)
    const data = await res.json()
    return data['data']
  }

  /*----------------*/

  const editingNews = (e) => {

    e.preventDefault()

    let methodEdit = "patch"
    let dataSend = {
      image_news: image,
      title_news: title,
      author_news: author,
      intro_news: intro,
      description_news: description
    }

    axios({ method: methodEdit, url: url_edit, data: dataSend })
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        else {
          setColorMessage("#22c55e")
        }
        setErrorTitle("")
        setErrorImage("")
        setErrorAuthor("")
        setErrorIntro("")
        setErrorDescription("")
        setShowElement(true)

        setEditStatus(res["data"]["message"])
      })
      .catch(error => {

        if (error['response']['data']['errors']['title_news']) {
          setErrorTitle(error['response']['data']['errors']['title_news'][0])
        }
        else {
          setErrorTitle("")
        }

        if (error['response']['data']['errors']['image_news']) {
          setErrorImage(error['response']['data']['errors']['image_news'][0])
        }
        else {
          setErrorImage("")
        }

        if (error['response']['data']['errors']['author_news']) {
          setErrorAuthor(error['response']['data']['errors']['author_news'][0])
        }
        else {
          setErrorAuthor("")
        }

        if (error['response']['data']['errors']['intro_news']) {
          setErrorIntro(error['response']['data']['errors']['intro_news'][0])
        }
        else {
          setErrorIntro("")
        }

        if (error['response']['data']['errors']['description_news']) {
          setErrorDescription(error['response']['data']['errors']['description_news'][0])
        }
        else {
          setErrorDescription("")
        }

      });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="News" />

      <div className='text-2xl mb-2'>EDITING NEWS</div>
      <Link to={'/news'}>
        <button
          style={{ backgroundColor: currentColor }}
          class="mb-6 font-semibold text-white py-2 px-4 rounded">
          Back To News list
        </button>
      </Link>

      <form 
      onClick={(e) => setShowElement(false)}
      class="w-full max-w-full">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Author
            </label>
            <input
              value={author}
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
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
            <input
              value={image}
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image name"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

            <img style={{ width: "15%" }} src={image} alt="news-image-item" />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title of news"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
              rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
              focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorTitle}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2" for="grid-city">
              Intro
            </label>

            <textarea
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              rows="4"
              placeholder="Intro of news here"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
              border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
            </textarea>

            <div style={{ color: "#f43f5e" }}>
              {errorIntro}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2" for="grid-city">
              Description
            </label>
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => {
                const data_description = editor.getData();
                setDescription(data_description)
              }}
            />

            <div style={{ color: "#f43f5e" }}>
              {errorDescription}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <div className='mb-2' style={{ color: corlorMessage }}>
              {showElement?editStatus:<></>} 
            </div>
            <button 
              style={{ backgroundColor: currentColor }}
              onClick={(e) => editingNews(e)}
              class="text-white font-bold py-2 px-4 rounded">
              EDITING NEWS
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default NewsEdit