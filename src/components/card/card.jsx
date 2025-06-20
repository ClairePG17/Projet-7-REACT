import "./card.scss";

export default function Card({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}