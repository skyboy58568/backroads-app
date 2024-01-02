export default function Subservices(props) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={props.iconClass}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{props.title}</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
}
