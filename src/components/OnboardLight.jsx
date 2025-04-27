import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { MapPin, User, Users, Heart, UserPlus } from "lucide-react"

export default function OnboardingLight() {
  return (
    <div className="w-full max-w-[320px] bg-white text-black rounded-3xl overflow-hidden border border-gray-200">
      <div className="p-6 flex flex-col h-[600px]">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-1">Plan Your Journey, Your Way!</h1>
          <p className="text-xs text-gray-500">Let's create your personalized travel experience</p>
        </div>

        {/* Form */}
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <label className="text-sm">Where would you like to go?</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Enter Destination" className="pl-10 bg-gray-50 border-gray-200" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm">How long will you stay?</label>
            <Select>
              <SelectTrigger className="bg-gray-50 w-full border-gray-200">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekend">Weekend</SelectItem>
                <SelectItem value="week">1 Week</SelectItem>
                <SelectItem value="twoweeks">2 Weeks</SelectItem>
                <SelectItem value="month">1 Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm">Who are you traveling with?</label>
            <div className="grid grid-cols-2 mt-2 gap-2">
              <div className="bg-gray-50 rounded-lg px-3 py-1 flex flex-col items-center justify-center border border-gray-200">
                <User className="h-5 w-5 mb-1" />
                <span className="text-xs">Solo</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-1 flex flex-col items-center justify-center border border-gray-200">
                <Heart className="h-5 w-5 mb-1" />
                <span className="text-xs">Couple</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-1 flex flex-col items-center justify-center border border-gray-200">
                <Users className="h-5 w-5 mb-1" />
                <span className="text-xs">Family</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-1 flex flex-col items-center justify-center border border-gray-200">
                <UserPlus className="h-5 w-5 mb-1" />
                <span className="text-xs">Friends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Continue</Button>
      </div>
    </div>
  )
}
