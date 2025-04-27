import { Button } from "./ui/button"
import { Home, Search, Plus, Heart, User, Clock, Check } from "lucide-react"
import tokyo from '../assets/tokyo.png'
import activityDark from "../assets/activityDark.png"
import accomo from '../assets/accomo.png'
import flight from '../assets/flight.png'
import dateDark from '../assets/dateDark.png'

export default function MainDashboard() {

  return (
    <div className="w-full max-w-[320px] bg-gray-950 text-white rounded-3xl overflow-hidden border border-gray-200">
      <div className="flex flex-col h-[600px] overflow-y-auto">

        <div className="p-4 bg-gray-950">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">Hello Chhavi!</h1>
              <p className="text-xs text-gray-500">Ready for the trip?</p>
            </div>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">C</div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <h2 className="text-sm font-medium mb-2">Your Upcoming Trip</h2>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={tokyo}
                alt="Tokyo"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl font-bold">TOKYO</h3>
                <p className="text-white text-xs">27.01.2024 - 31.01.2024</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1 rounded-md">
                <Plus className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <img className="rounded-xl" src={flight} alt="" />

          <img src={accomo} alt="" />

          <img className="rounded-lg" src={dateDark} alt="" />
          
          <img className="rounded-lg" src={activityDark} alt="" />


        </div>

        <div className="mt-auto p-3 bg-gray-950 text-white flex justify-between items-center border-t border-white">
          <Button variant="ghost" size="icon" className="flex flex-col items-center h-auto p-1">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center h-auto p-1">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center h-auto p-1 relative">
            <div className=" rounded-full p-2">
              <Plus className="h-7 w-7 font-bold text-blue-500" />
            </div>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center h-auto p-1">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center h-auto p-1">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
