import { Outlet } from "react-router"
const RootLayout = () => {
  return (
    <div className="ApplicationContainer">
      {/* Navigation Bar Here */}
      <div className="PageContainer">
        <Outlet />
      </div>
      {/* Footer Here */}
    </div>
  )
}

export default RootLayout