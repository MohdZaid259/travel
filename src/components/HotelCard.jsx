import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Check, Clock } from "lucide-react"

export default function HotelCard({ name, imgUrl, nights, status, checkIn, checkOut }) {
  return (
    <Card className="border border-gray-200">
      <CardContent className="p-0">
        <img
          src={imgUrl || "/placeholder.svg"}
          alt={name}
          width={150}
          height={80}
          className="w-full h-20 object-cover"
        />
        <div className="p-2">
          <p className="text-xs font-medium line-clamp-1">{name}</p>
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex items-center text-[10px] text-gray-500">
              <span>Check in: {checkIn}</span>
            </div>
            <div className="flex items-center text-[10px] text-gray-500">
              <span>Check out: {checkOut}</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" className="text-[10px] h-4 bg-blue-50 text-blue-700 border-blue-200">
                {nights} nights
              </Badge>
              {status === "confirmed" ? (
                <Badge variant="outline" className="text-[10px] h-4 ml-1 bg-green-50 text-green-700 border-green-200">
                  <Check className="h-2 w-2 mr-0.5" />
                  Confirmed
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-[10px] h-4 ml-1 bg-orange-50 text-orange-700 border-orange-200"
                >
                  <Clock className="h-2 w-2 mr-0.5" />
                  Pending
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
