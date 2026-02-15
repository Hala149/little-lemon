import { Link } from "react-router-dom";
import hero from "../assets/restaurant.jpg";
import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon dessert.jpg";

function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <p>Family owned Mediterranean restaurant</p>
          <Link to="/booking">
            <button>Reserve a Table</button>
          </Link>
        </div>
      </section>

      {/* SPECIALS */}
      <section>
        <h2>Specials</h2>
        <div className="cards">
          <div className="card">
            <img src={salad} alt="Greek Salad" />
            <h3>Greek Salad</h3>
          </div>
          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <h3>Bruschetta</h3>
          </div>
          <div className="card">
            <img src={dessert} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
