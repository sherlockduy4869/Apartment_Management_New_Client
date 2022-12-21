import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const NewsAdd = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [intro, setIntro] = useState("")
  const [description, setDescription] = useState("")

  const [addStatus, setAddStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const [errorTitle, setErrorTitle] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [errorAuthor, setErrorAuthor] = useState("")
  const [errorIntro, setErrorIntro] = useState("")
  const [errorDescription, setErrorDescription] = useState("")

  const addingNews = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "http://localhost/admin_api/public/api/v1/news"

    formData.append("title_news", title)
    formData.append("image_news", image)
    formData.append("author_news", author)
    formData.append("intro_news", intro)
    formData.append("description_news", description)

    axios.post(url_add, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setErrorTitle("")
        setErrorImage("")
        setErrorAuthor("")
        setErrorIntro("")
        setErrorDescription("")
        
        setAddStatus(res["data"]["message"])
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

      <div className='text-2xl mb-2'>ADDING NEWS</div>
      <Link to={'/news'}>
        <button
          class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To News list
        </button>
      </Link>

      <form class="w-full max-w-full">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Author
            </label>
            <input
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
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image name"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"/>

            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>

          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
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
              {addStatus}
            </div>
            <button onClick={(e) => addingNews(e)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ADDING NEWS
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default NewsAdd