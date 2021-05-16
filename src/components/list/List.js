import s from './List.module.css'
import data from '../../db.json'
import shortId from 'shortid'
import { getFilter } from '../../redux/selectors'
import {useSelector} from 'react-redux'

export default function List() {
    const filter = useSelector(getFilter)
    const exs = data.exercises

   

    const list = (exsList, word) => {
        // const defVideo = [{
        //     "url": "https://www.youtube.com/embed/jneMb8nY2EM",
        // }]
        const findEl = exsList.filter((el) => 
            el.name.toLowerCase().includes(word.toLowerCase()) )
    return findEl
      }

 let listExs = list(exs, filter)

    return (
         <div className={s.div}>
        <ul className={s.list}>
            {listExs.map(({name, url}) => (
                 <li key={shortId.generate()} className={s.item}>
                     <iframe width="360" height="215" src={url} title={name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </li>
           )
            )}
        </ul>
 </div> 
    )
}