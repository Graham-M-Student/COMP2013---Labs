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
      <p>{location}</p>
      <p>{rating}</p>
      <p style={{ color: "red", fontWeight: "bolder" }}>{price && "SALE"}</p>
    </div>
  );
}