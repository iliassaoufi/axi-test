import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Footer from '../ui/shared/Footer';
import ProductSection from './ProductSection';
import HeroSection from './HeroSection';
import './home.css';

export default function Index() {
    const user = useSelector((state) => state.authentication.user);
    const history = useHistory();
    React.useEffect(() => {
        if (!user) {
            history.push("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return <div className='scroller'>

        <section>
            <HeroSection />
        </section>
        <section>
            <ProductSection />
        </section>
        <section>
            <Footer />
        </section>
    </div>;
}
