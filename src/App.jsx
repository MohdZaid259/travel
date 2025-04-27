
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import OnboardingDark from "./components/OnboardDark.jsx"
import OnboardingLight from "./components/OnboardLight.jsx"
import MainDashboard from "./components/MainDashboard.jsx"
import MainDashDark from './components/MainDashDark.jsx'

function App() {

  return (
  <div className="container mx-auto py-10 px-4">
    <Tabs defaultValue="onboarding-dark" className="w-full ">
      <TabsList className="grid grid-cols-4 mb-8 text-center">
        <TabsTrigger value="onboarding-light">Onboarding Light</TabsTrigger>
        <TabsTrigger value="onboarding-dark">Onboarding Dark</TabsTrigger>
        <TabsTrigger value="dashboard">Main Dashboard</TabsTrigger>
        <TabsTrigger value="all">Main Dashboard Dark</TabsTrigger>
      </TabsList>

      <TabsContent value="onboarding-light" className="flex justify-center">
        <OnboardingLight />
      </TabsContent>

      <TabsContent value="onboarding-dark" className="flex justify-center">
        <OnboardingDark />
      </TabsContent>

      <TabsContent value="dashboard" className="flex justify-center">
        <MainDashboard />
      </TabsContent>

      <TabsContent value="all" className="flex justify-center">
        <MainDashDark/>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default App