import React from "react";

function LocationSearchPanel({
  setPanelOpen,
  setVehiclePanel,
  setPickup,
  setDestination,
  pickupSuggestions = [], 
  destinationSuggestions = [], 
}) {
  const handleSelectLocation = (location, isPickup) => {
    if (isPickup) {
      setPickup(location);
    } else {
      setDestination(location);
    }

   // setPanelOpen(false);
    //setVehiclePanel(true);
  };

  return (
    <div>
     
      {pickupSuggestions.length > 0 && (
        <div>
          <h3 className="text-gray-700 font-semibold">Pickup Locations</h3>
          {pickupSuggestions.map((location, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectLocation(location, true)}
              className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer"
            >
              <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className="font-medium">{location}</h4>
            </div>
          ))}
        </div>
      )}

      
      {destinationSuggestions.length > 0 && (
        <div>
          <h3 className="text-gray-700 font-semibold">Destination Locations</h3>
          {destinationSuggestions.map((location, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectLocation(location, false)}
              className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer"
            >
              <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className="font-medium">{location}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationSearchPanel;
