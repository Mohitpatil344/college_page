import './CampusLife.css';

const CampusLife = ({ events, onEventClick }) => (
  <section className="campus-life">
    <h2 className="heading">Our Events:</h2>
    <h3 className="subheading">Be a part of one of the most prestigious events in the city</h3>
    <div className="event-grid">
      {events.map((event) => (
        <div
          key={event.id}
          className="event-card"
          onClick={() => onEventClick(event)}
        >
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
          />
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">{event.date}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CampusLife;
