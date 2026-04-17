import SubBanner from "../components/SubBanner";
import roomBanner from "../assets/roomBanner.png";
import RoomsGrid from "../components/RoomsGrid";



function Rooms() {
  return (
    <>
      <SubBanner
        title="Rooms"
        backgroundImage={roomBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rooms" },
        ]}
      />
      <RoomsGrid/>
    </>
  );
}


export default Rooms;