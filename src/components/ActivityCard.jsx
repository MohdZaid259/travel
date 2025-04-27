import { Card, CardContent } from './ui/card'

export default function ActivityCard({ name, imgUrl, timing, duration, pickupLocation }) {
  return (
    <Card className="border border-gray-200 mb-2">
      <CardContent className="p-2 flex gap-2">
        <img
          src={imgUrl || "/placeholder.svg"}
          alt={name}
          width={60}
          height={60}
          className="w-14 h-14 rounded-md object-cover"
        />
        <div className="flex-1">
          <p className="font-medium text-xs">{name}</p>
          <div className="mt-1 space-y-0.5">
            <p className="text-[10px] text-gray-500">Timing: {timing}</p>
            <p className="text-[10px] text-gray-500">Duration: {duration}</p>
            <p className="text-[10px] text-gray-500">Pick up: {pickupLocation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
