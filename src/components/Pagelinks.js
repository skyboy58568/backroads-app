import { pagelinks } from "../pagelinks"

export default function PageLinks({parentClass, itemClass}){
    return(
        <ul className={parentClass} id={parentClass}>
        {pagelinks.map((data) => (
          <li key={data.id}>
            <a className={itemClass} href={data.href}>
              {data.text}
            </a>
          </li>
        ))}
      </ul>
    )
}