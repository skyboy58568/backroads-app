

export default function Tour(props){
    return(
        <article className="tour-card">
        <div className="tour-img-container">
          <img src={props.img} className="tour-img" alt="" />
          <p className="tour-date">{props.date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{props.title}</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {props.country}
            </p>
            <p>{props.duration}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </article>


    )
}