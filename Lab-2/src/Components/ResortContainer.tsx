import ResortCard from "./ResortCard";
import type { ResortListing } from "../data/data";

interface ResortCard {
  data: ResortListing[];
}
export default function ResortContainer({ data }: ResortCard) {
  return (
    <div className="ResortContainer">
      {data.map((list) => (
        <ResortCard key={list.id} {...list} />
      ))}
    </div>
  );
}