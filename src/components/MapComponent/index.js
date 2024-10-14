import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip, TooltipProvider } from "react-tooltip";
import PublicIcon from "@mui/icons-material/Public";

// Updated URL to reliable TopoJSON source
const mapUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Arbitrary country coordinates for spice exports
const countryLocations = [
  { name: "Finland", coordinates: [25.748151, 61.92411] },
  { name: "United States", coordinates: [-95.712891, 37.09024] },
  { name: "Brazil", coordinates: [-51.9253, -14.235] },
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "Japan", coordinates: [138.2529, 36.2048] },
  { name: "South Africa", coordinates: [22.9375, -30.5595] },
  { name: "France", coordinates: [2.2137, 46.6034] },
  { name: "Italy", coordinates: [12.5674, 41.8719] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Australia", coordinates: [133.7751, -25.2744] },
  { name: "United Kingdom", coordinates: [-3.435973, 55.378051] },
  { name: "Russia", coordinates: [105.3188, 61.524] },
  { name: "Mexico", coordinates: [-102.5528, 23.6345] },
  { name: "Spain", coordinates: [-3.7038, 40.4168] },
  { name: "Argentina", coordinates: [-63.6167, -38.4161] },
  { name: "Egypt", coordinates: [30.8025, 26.8206] },
  { name: "China", coordinates: [104.1954, 35.8617] },
  { name: "Thailand", coordinates: [100.9925, 15.870] },
  { name: "Netherlands", coordinates: [5.2913, 52.1326] },
  { name: "Sweden", coordinates: [18.6435, 60.1282] },
  { name: "Switzerland", coordinates: [8.2275, 46.8182] },
  { name: "Malaysia", coordinates: [101.9758, 4.2105] },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  { name: "Turkey", coordinates: [35.2433, 38.9637] },
  { name: "UAE", coordinates: [55.2708, 25.2048] },
  { name: "South Korea", coordinates: [127.7669, 35.9078] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Vietnam", coordinates: [108.2772, 14.0583] },
  { name: "New Zealand", coordinates: [174.885971, -40.900557] },
  { name: "Portugal", coordinates: [-8.2245, 39.3999] },
  { name: "India", coordinates: [78.96288, 20.593684] },
];

const MapComponent = () => {
  return (
    <TooltipProvider>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#1f1f1f",
          color: "#fff",
          padding: '32px 0px',
          width: "100%",   // Ensure full width
        }}
      >
        <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom style={{fontWeight:'bold'}}>
          Vintage Values, Tomorrow's Technology, Global Presence
        </Typography>

        <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
          <ComposableMap
            projectionConfig={{ scale: 180 }} // Increased scale for larger map
            width={1000}                      // Increased map width
            height={500}                      // Increased map height
            style={{ width: "100%", height: "auto" }}
          >
            {/* Render World Map */}
            <Geographies geography={mapUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2a2a2a"
                    stroke="#444"
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#333", outline: "none" },
                      pressed: { fill: "#222", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Render Country Markers */}
            {countryLocations.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  data-tooltip-id="tooltip"
                  data-tooltip-content={name}
                  r={5}
                  fill="#1976d2"
                  stroke="#fff"
                  strokeWidth={2}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </Marker>
            ))}
          </ComposableMap>
          <Tooltip id="tooltip" />
        </Box>

        <Typography variant="h5" sx={{ marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontWeight:'bold' }}>
          Serving <span style={{ color: "#f44336", fontWeight: "bold", marginRight: "4px", marginLeft: "8px" }}>30+</span> 
          <PublicIcon style={{ color: "#f44336", marginRight:"8px", fontSize:'48px' }} />
          Countries
        </Typography>
        </Container>
      </Box>
    </TooltipProvider>
  );
};

export default MapComponent;
