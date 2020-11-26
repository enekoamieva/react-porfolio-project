//Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

function ServicesSection() {
    return (
        <div className="services-section">
            <div className="description">

                <h2>High <span>quality</span> services</h2>

                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Diaphrahm</h3>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Money</h3>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Team Work</h3>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="image">
                <img src={home2} alt="home-image" />
            </div>

        </div>
    );
}

export default ServicesSection;
