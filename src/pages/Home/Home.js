import React from 'react';
import Product from '../../components/Product/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EpicDailyDeals/LandingPage/HOL21_EDD_Phase4_hero-banner_short_desktop_1500x150.jpg" alt="" /> */}
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB_428684220_.jpg" alt="" />
            <div className="home__row">
                <Product 
                    id="12312311"
                    title="Best sell Sansung S20 Smartphone 7.2 inch Cellphones Android Global Version languag 3G 4G 5G No Unlocked Original Mobile phones"
                    price="689000"
                    image="https://sc04.alicdn.com/kf/Ha9dfaa2d59094e47b4563a08bd14ad87S/251687683/Ha9dfaa2d59094e47b4563a08bd14ad87S.jpg"
                    rating={3}
                />
                <Product 
                    id="12312312"
                    title="Hot selling heart rate blood pressure monitor sport waterproof T500 smart watch with phone call"
                    price="250000"
                    image="https://sc04.alicdn.com/kf/H28c133f60ee04d9ea9ab653ef1ad5c52r.jpg"
                    rating={1}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12312313"
                    title="Samsun LC49RG90S5UXEN 49' Curved Led Gaming Monitor"
                    price="367500"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={5}
                />
                <Product 
                    id="12312314"
                    title="Amazon hot M new I12 pro smartphone original unlocked MTK6889 12GB + 512GB smartphone 4G mobile phone 4g ram mobile phones"
                    price="482100"
                    image="https://sc04.alicdn.com/kf/H4f2009aebc2d4fe6b3e9675fe8f697f8g/240423118/H4f2009aebc2d4fe6b3e9675fe8f697f8g.jpg"
                    rating={4}
                />
                <Product 
                    id="12312315"
                    title="2021 Sunsung S21 Smartphone Android 16GB+512GB 7.3 inch Unlock OLED Screen Dual SIM Mobile phones 5g"
                    price="555500"
                    image="https://sc04.alicdn.com/kf/H63135dd6f7134ec1a40d220c942bad5b7/251687683/H63135dd6f7134ec1a40d220c942bad5b7.jpg"
                    rating={2}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12312316"
                    title="Barware wholesale Moscow Mule Mug drinking for sale Copper Mug"
                    price="102000"
                    image="https://sc04.alicdn.com/kf/U6e0d1647b4e94378b8615899dc90fdd0j.jpg"
                    rating={5}
                />
            </div>
            </div>
        </div>
    );
};

export default Home;