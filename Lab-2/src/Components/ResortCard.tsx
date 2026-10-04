import type { ResortListing } from "../data/data";
export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  return (
    <div className="ResortCard">
      <img src={pic} alt="" width="100px" />
      <h2>{country}</h2>
      <i>{location}</i>
      <p style={{ color: "red"}} >{rating < 4 && rating + "★"}</p>
      <p style={{ color: "green"}} >{rating > 4 && rating + "★"}</p>
      <p>{price + "/night"}</p>
    </div>
  );
}