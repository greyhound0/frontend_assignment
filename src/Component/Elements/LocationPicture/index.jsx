// import React from "react";
// import { useState } from "react";

// import { MapContainer, Marker, TileLayer } from "react-leaflet";

// function LocationPicture({ geo = "" }) {
//   console.log("LOCATION ADDRESS", geo?.lng);
//   const [lat, setlat] = useState("-31.8hotlink-ok9");
//   return (
//     <MapContainer
//       center={[lat, 62.5342]}
//       zoom={15}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
//       />
//       <Marker position={[lat, 62.5342]} />
//     </MapContainer>
//   );
// }

// export default LocationPicture;

// import React from "react";

// function LocationPicture({ geo = "" }) {
//   const apiKey = "AIzaSyCeh8WIEhgGmmSjvcVIxWh8MgSV-cR7NCk"; // Replace with your Google Maps API key
//   const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=-31.8hotlink-ok9,&zoom=14&size=400x300&key=${apiKey}`;
//   console.log("LOCATION ADDRESS", geo?.lat, geo?.lng);
//   return (
//     <div>
//       <img src={imageUrl} alt="Location Picture" />
//     </div>
//   );
// }

// export default LocationPicture;

// import React from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";

// function LocationPicture({ geo = "" }) {
//   const mapZoom = 15;
//   console.log("LOCATION ADDRESS", geo?.lat, geo?.lng);
//   const mapCenter = [28.52354878521309, 77.20765162272079];

//   return (
//     <div>
//       <MapContainer
//         // center={mapCenter}
//         zoom={mapZoom}
//         style={{ height: "40px", width: "60px" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
//         />
//         <Marker position={mapCenter} />
//       </MapContainer>
//     </div>
//   );
// }

// export default LocationPicture;
// -31.8hotlink-ok9 62.5342

function LocationPicture({ lat, lng }) {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${lng}!2d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689364990741!5m2!1sen!2sin`;

  const map = `<iframe
  src="https://www.google.com/maps?q=${lat},${lng}&hl=en &z=10&amp;output=embed"
  width="500px"
  height="300px"
  style="border: 0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>`;
  return (
    <div
      style={{ borderRadius: "20px", overflow: "hidden", marginTop: "20px" }}
      dangerouslySetInnerHTML={{ __html: map }}
    ></div>
  );
}

export default LocationPicture;
