import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const tournamentsArr =
[
  {
    "tournamentId": 1,
    "tournamentName": "Tournament of the year : Christmas Tournament ",
    "tournamentDate": "1392-12-25T00:00:00",
    "price": 100,
    "prize": 12500,
    "tournamentLocation": "Castle of Vincennes",
    "tournamentType": "With Mount",
    "description": "This is the last tournament of the year, you will have the chance to fight in front of the king in person",
    "participants": 100,
    "champion": "Creddred",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_1.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  },
  {
    "tournamentId": 2,
    "tournamentName": "Easter Tournament",
    "tournamentDate": "1392-04-15T00:00:00",
    "price": 4,
    "prize": 500,
    "tournamentLocation": "Castle of Roquetaillade",
    "tournamentType": "With mount",
    "description": "We are not looking for eggs but for bloodthirsty fighters",
    "participants": 50,
    "champion": "Anosdagan",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_2.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  },
  {
    "tournamentId": 3,
    "tournamentName": "Spring Tournament",
    "tournamentDate": "1392-03-20T00:00:00",
    "price": 1,
    "prize": 100,
    "tournamentLocation": "Castle of Faverges",
    "tournamentType": "Without Mount",
    "description": "No time to see the tulips bloom, the fights have started again",
    "participants": 25,
    "champion": "Holdjamy",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_3.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_foot_1.png"
  },
  {
    "tournamentId": 4,
    "tournamentName": "Mother's Day Tournament",
    "tournamentDate": "1392-05-30T00:00:00",
    "price": 10,
    "prize": 250,
    "tournamentLocation": "Castle of Veauce",
    "tournamentType": "Without Mount",
    "description": "Many mothers lose their children during this tournament",
    "participants": 30,
    "champion": "Creddred",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_4.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_foot_1.png"
  },
  {
    "tournamentId": 5,
    "tournamentName": "Ascension Tournament",
    "tournamentDate": "1392-05-13T00:00:00",
    "price": 10,
    "prize": 1000,
    "tournamentLocation": "Castle of Rouen",
    "tournamentType": "With Mount",
    "description": "As the symbol of faith expresses it: “He ascended into Heaven; he is seated at the right hand of the Father. He will come again in glory to judge the living and the dead, and his reign will have no end ",
    "participants": 75,
    "champion": "Asnosdagan",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_5.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  },
  {
    "tournamentId": 6,
    "tournamentName": "Epiphany Tournament",
    "tournamentDate": "1392-01-06T00:00:00",
    "price": 1,
    "prize": 100,
    "tournamentLocation": "Palace of the Dukes of Bourgogne",
    "tournamentType": "Without Mount",
    "description": "Epiphany: opening of the Combats, we have been waiting for this since last year",
    "participants": 50,
    "champion": "",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_6.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_foot_1.png"
  },
  {
    "tournamentId": 7,
    "tournamentName": "Pentecote Tournament",
    "tournamentDate": "1392-05-23T00:00:00",
    "price": 50,
    "prize": 1000,
    "tournamentLocation": "Castle of Courtanvaux",
    "tournamentType": "With Mount",
    "description": "Commemorates the descent of the Holy Spirit and become an apostle of Jesus Christ",
    "participants": 50,
    "champion": "Creddred",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_7.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  },
  {
    "tournamentId": 8,
    "tournamentName": "Assumption Tournament",
    "tournamentDate": "1392-08-15T00:00:00",
    "price": 50,
    "prize": 1000,
    "tournamentLocation": "Castle of Thorens",
    "tournamentType": "With Mount",
    "description": "The Assumption of the Blessed Virgin and also of our fighters",
    "participants": 100,
    "champion": "Holdjamy",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_8.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  },
  {
    "tournamentId": 9,
    "tournamentName": "Toussaint Tournament",
    "tournamentDate": "1392-11-01T00:00:00",
    "price": 25,
    "prize": 500,
    "tournamentLocation": "Castle of Falaise",
    "tournamentType": "Without Mount",
    "description": "The day after the feast of the dead: enough to honor all these fighters who left too early",
    "participants": 50,
    "champion": "Anosdagan",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_9.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_foot_1.png"
  },
  {
    "tournamentId": 10,
    "tournamentName": "Charles V Tournament ",
    "tournamentDate": "1392-11-01T00:00:00",
    "price": 5,
    "prize": 100,
    "tournamentLocation": "Castle of Veauce",
    "tournamentType": "With Mount",
    "description": "Fight here or join the ranks for war!",
    "participants": 20,
    "champion": "Anosdagan",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_10.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  },
  {
    "tournamentId": 11,
    "tournamentName": "Clément VII Tournament ",
    "tournamentDate": "1392-11-01T00:00:00",
    "price": 10,
    "prize": 500,
    "tournamentLocation": "Castle of Falaise",
    "tournamentType": "Without Mount",
    "description": "Come and entertain Pope Clement VII",
    "participants": 30,
    "champion": "creddred",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_11.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_foot_1.png"
  },
  {
    "tournamentId": 12,
    "tournamentName": "Annunciation Tournament",
    "tournamentDate": "1392-02-15T00:00:00",
    "price": 10,
    "prize": 500,
    "tournamentLocation": "Castle of Falaise",
    "tournamentType": "With Mount",
    "description": "You can sprinkle your crepes with sugar or even the blood of our fighters, it's up to you",
    "participants": 30,
    "champion": "creddred",
    "images": "http://milhiecreation.com/imagesHackaton/Tournament/Icon_tournament_12.png",
    "videos": "http://milhiecreation.com/imagesHackaton/Tournament/bg_horse_1.png"
  }
]

function TournamentDetails() {

  const { id } = useParams()
  const [tournament, setTournament] = useState([])

  useEffect(() =>
    tournamentsArr.map(item =>
      // eslint-disable-next-line
      item.tournamentId == id ? setTournament(item) : [])
  )

  return (
    <>
      <Link to="/" >
        <h1 className="site-logo">FYT</h1>
      </Link>
      <div className="tournament-details">
        <img className="tournament-img" src={tournament.images} alt={tournament.tournamentName} />
        <div className="tournament-info">
          <div>
            <h2 className="name">{tournament.tournamentName}</h2>
            <div className="text">{tournament.tournamentDate}</div>
            <div className="text">Number of participants: {tournament.participants}</div>
            <div className="text">Prize: {tournament.prize}</div>
            <div className="text">Price: {tournament.price}</div>
            <div className="description">
              Description of the tournament: {tournament.description}
            </div>
            <div className="location">Location: {tournament.tournamentLocation} </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TournamentDetails;