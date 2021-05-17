import { React, useState } from 'react'
import Filter from './components/filter'
import List from './components/list'
import Footer from './components/footer'
import data from './db.json'

function App() {
  const [query, setQuery] = useState([])

  const list = (exsList, word) => {
    const defVideo = [{
        "url": "https://www.youtube.com/embed/jneMb8nY2EM",
    }]
    if (!word) {
        return defVideo
    }
    const findEl = exsList.filter((el) => 
        el.name.toLowerCase().includes(word.toLowerCase()) )
        // console.log(findEl);
return findEl
  }

const getQuery = (value) => {

const lst = list(data.exercises, value)

  setQuery(lst)
}

  return (
  <>
    <Filter onSubmit={getQuery} />
    <List getQuery={query} />
    <Footer />
  </>
  )
}

export default App;
