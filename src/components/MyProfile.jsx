import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import "../styles/MyProfile.css";

const knightInfo = [
  {
    "knightId": 17,
    "knightName": "Creddred",
    "age": 28,
    "victories": 31,
    "defeats": 0,
    "banner": "http://milhiecreation.com/imagesHackaton/FinalBanners/banner_5.png",
    "weapons": "Two handed sword",
    "weaponsIcons": "http://milhiecreation.com/imagesHackaton/FinalIcon/Icon_weapon.png",
    "armors": "Plate armor",
    "armorsIcons": "http://milhiecreation.com/imagesHackaton/FinalIcon/Icon_armor.png",
    "mount": true,
    "mountType": "Griffon",
    "mountTypeIcons": "http://milhiecreation.com/imagesHackaton/FinalIcon/IconMount.png",
    "mountName": "Ragnar",
    "moto": "Cool, you are food for my pet",
    "avatar": "http://milhiecreation.com/imagesHackaton/Avatar/Creddred.png",
    "region": "Languedoc",
    "pigeon": "Creddred_Languedoc@pigeon.com",
    "pigeonIcons": "http://milhiecreation.com/imagesHackaton/FinalIcon/IconPigeonWhite.png",
    "alive": true,
    "aliveIcons": "http://milhiecreation.com/imagesHackaton/FinalIcon/IconHeartWhite.png",
    "ranking": 1,
    "rankingIcons": "http://milhiecreation.com/imagesHackaton/FinalIcon/IconRank_or.png",
    "successIcons": "http://milhiecreation.com/imagesHackaton/success/success_1tournament.png"
    }
]

function MyProfile() {


  return (
    <>
      <Link to="/" >
        <h1 className="site-logo">FYT</h1>
      </Link>
      <h1>My profile</h1>
      {
        knightInfo.map(item => {
          return (
            <div>
              <div className="header-profile">
                <img className="avatar-list" src={item.avatar} alt="avatar"/>
                <h3>{item.knightName}</h3>
                <div className="title">{item.age}</div>
                <div className="title">{item.alive ? "Alive" : "Dead"}</div>
              </div>
              <div className="profile-container">
                <div className="text">Number of victories: {item.victories}</div>
                <div className="text">Number of defeats: {item.defeats}</div>
              </div>

              <div className="profile-info-container">
                <div className="profile-container">
                  <h4 className="text">My stats</h4>
                  <div className="text">Rank: {item.ranking}</div>
                  <div>
                    <img src={item.successIcons} alt="badge" />
                  </div>
                  <div>
                    <img src={item.banner} alt="badge" />
                  </div>
                </div>

                <div className="profile-container">
                  <h4 className="text">My caracteristics</h4>
                  <img className="icon" src={item.weaponsIcons} alt="weapon" />
                  <div className="text">{item.weapons}
                  </div>
                  <div className="text">My mount: {item.mount ? item.mountType + "Name:" + item.mountName : "none"}</div>
                  <div className="text">Gear: {item.armors}</div>
                  <div className="text">Region: {item.region}</div>
                  <div className="text">Pigeon: {item.pigeon}</div>
                  <div className="text">Moto: {item.moto}</div>
                </div>
              </div>
            </div>
          )

        })
      }
      <Footer />
    </>

  )
}

export default MyProfile;