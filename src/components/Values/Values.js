
import { PRODUCTS } from '../../data/products';
import ValuesItem from './ValuesItem';

export default function Values() {
    return (
        <section className="values">
        <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values__wrapper">
                {PRODUCTS.map(item => (
                    <ValuesItem key={item.id} title={item.title} image={item.image} description={item.description}  />
                ))}
            </div>
        </div>
    
    </section>
    )
}