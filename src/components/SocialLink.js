import { sociallinks } from "../pagelinks"

export default function Sociallinks({parentClass, itemClass}){
    return(
        <ul className={parentClass}>

        {sociallinks.map(data => <li key={data.id}>
              <a href={data.href} target='_blank' rel='noreferrer' className={itemClass}> <i className={data.classname}></i>  </a>
            </li>)}
       
        </ul>
    )
}