import { Plus } from "lucide-react"

export default function TripCard({ destination, dateRange, imgUrl }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img
        src={imgUrl || "/placeholder.svg"}
        alt={destination}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white text-2xl font-bold">{destination}</h3>
        <p className="text-white text-xs">{dateRange}</p>
      </div>
      <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1 rounded-md">
        <Plus className="h-4 w-4 text-white" />
      </div>
    </div>
  )
}
