import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className='caption-img'/>
          <p>
            Discovering his ties to a secret ancient order, a young
            man living in modern Istanbul embarks on a quest to save the
            city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn' aria-label="Play">
              <img src={play_icon} alt="Play Icon" />Play
            </button>
            <button className='btn dark-btn' aria-label="More Info">
              <img src={info_icon} alt="Info Icon" />More info
            </button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        {[
          { title: "Blockbuster Movies", category: "top_rated" },
          { title: "Only on Netflix", category: "popular" },
          { title: "Upcoming", category: "upcoming" },
          { title: "Top Picks for you", category: "now_playing" },
        ].map(({ title, category }) => (
          <TitleCards key={category} title={title} category={category} />
        ))}
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
