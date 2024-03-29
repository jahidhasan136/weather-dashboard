const data = [
  {
    location: "London",
    latitude: 51.5072,
    longitude: 0.1276,
  },
  {
    location: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    location: "Dhaka",
    latitude: 23.8041,
    longitude: 90.4152,
  },
  {
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: 74.006,
  },
  {
    location: "Toronto",
    latitude: 43.6532,
    longitude: 79.3832,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
