import { Card, CardContent } from './ui/card'

export default function FlightCard({ departure, arrival, time }) {
  return (
    <Card className="border border-gray-200">
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">{departure.code}</p>
            <p className="text-xs text-gray-500">
              {departure.city}, {departure.country}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-0.5 bg-gray-300 relative">
              <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-gray-300"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{time}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">{arrival.code}</p>
            <p className="text-xs text-gray-500">
              {arrival.city}, {arrival.country}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
