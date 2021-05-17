import { React } from 'react'
import s from './List.module.css'
import shortId from 'shortid'

export default function List(props) {
    const ulli = document.querySelector('ul')
console.log(ulli);
    return (
         <div className={s.div}>

{ulli === null && <div className={s.defVideo}>
             <iframe  width="320" height="215" src="https://www.youtube.com/embed/1maI21Y4lCM?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
             </div>}
            
          <ul className={s.list}>
             {props.getQuery.lenght !== 0 && props.getQuery.map(({name, url}) => (
                  <li key={shortId.generate()} className={s.item}>
                      <iframe width="320" height="215" src={url} title={name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                 </li>
            )
             )}
         </ul>
 </div> 
    )
}