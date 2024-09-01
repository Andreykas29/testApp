import {SLIDES} from '../../data/slides';
import SliderItem from './SliderItem'
import {useState, useEffect} from 'react'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(false);

    
    const updateBtnState = () => {
        setDisabledLeft(currentSlide === 0);
        setDisabledRight(currentSlide === SLIDES.length - 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
            updateBtnState();
        }
    };

    const nextSlide = () => {
        if (currentSlide < SLIDES.length - 1) {
            setCurrentSlide((prev) => prev + 1);
            updateBtnState();
        }
    };
    const slideInBtn = (id) => {
        setCurrentSlide(id)
        updateBtnState()
    } 

    useEffect(() => {
        updateBtnState()
    }, [currentSlide])

    const transformValue = `translateX(-${currentSlide * 814}px)`;

    return (
        <section className="slider">
        <div className="container">
            <div className="slider__wrapper">
                <div className="slider__inner">
                    {SLIDES.map((item) => (
                        <SliderItem title={item.title} image={item.image} key={item.id} 
                        active={(item.id -1) === currentSlide ? 'active' : ''}
                        transform={transformValue}/>
                    ))}

                </div>
                <div className="slider__control">
                    <button disabled={disabledLeft} onClick={prevSlide} className="left_btn">
                        <span>
                            <img src="images/leftArrow.png" alt="arrow"/>
                        </span>
                    </button>
                    <div className="center_btn">
                    {SLIDES.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                            onClick={() => slideInBtn(index)}
                        />
                    ))}
                    </div>
                    <button disabled={disabledRight} onClick={nextSlide} className="right_btn">
                        <span>
                            <img src="images/rightArrow.png" alt="arrow"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    )
}