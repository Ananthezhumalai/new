import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import ButtonDemo from "./page/Home";
import UserProfile  from "./page/UserProfile"
import Validation from "./page/About";
import Invoice from "./page/Invoice";
import RouteAsObj from "./page/RouteAsObj";
// import CustomizedTabs from "./page/Search";
import UserDashboard from "./page/UserDashboard";
import IconMenu from "./page/UserProfile";
// {signup button}
import UserEditProfile from "./page/UserEditProfile";
// {service page}
import AdminDashboard from "./page/AdminDashboard";
// {service page}
// import Order from "./page/order";
// import Order from "./page/orders"

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/about" element={<Validation />} />
        
     
        <Route path="/user">
           <Route  element={<UserDashboard />} />
           {/* <Route path="profile" element={<UserProfile />} /> */}
           <Route path=":editId" element={<UserEditProfile />} /> 
           <Route path="admin" element={<AdminDashboard />} /> 
        </Route>
        
       
        <Route path="invoice/*" element={<Invoice  />} />
        <Route path="object_route/*" element={<RouteAsObj  />} />

        <Route path="search" element={<IconMenu  />} />
        <Route path="*" element={<NotFound />} />
       
      <Route path='/About' element={<Validation/>} />
      {/* <Route path='/About' element={<Validation />} />
       */}
       {/* <Route path='/order' element={<Order />} /> */}

      </Routes>
    </div>
  );
}

export const NotFound = () => {
  return <div><h1> 404 page not found </h1> </div>
}

export default App;
