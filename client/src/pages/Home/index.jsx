import Collections from "../../components/HomePageComponents/Collections"
import GravelBicycle from "../../components/HomePageComponents/GravelBicycle"
import NewArrivals from "../../components/HomePageComponents/NewArrivals"
import OnlyOnline from "../../components/HomePageComponents/OnlyOnline"
import ShopInstagram from "../../components/HomePageComponents/ShopInstagram"
import Header from "../../layout/Header"

const Home = () => {
  return (
    <>
    <Header/>
    <Collections/>
    <NewArrivals/>
    <OnlyOnline/>
    <GravelBicycle/>
    <ShopInstagram/>
    </>
  )
}

export default Home