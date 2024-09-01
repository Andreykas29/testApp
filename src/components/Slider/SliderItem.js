export default function SliderItem({title, image, active, transform}) {
    return (
        <div className={`slider__inner__content ${active}` }style={{ transform: transform }}>
            <h3>{title}</h3>
            <hr className="slider__line"/>
            <img src={image} alt="slider"/>
            <a href="#">See more</a>
        </div>
    )
}