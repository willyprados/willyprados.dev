import axios from "axios";
import { isAfter, isBefore } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { DayComponent, NightComponent } from ".";

// Función para mapear códigos WMO de Open-Meteo a iconos de OpenWeatherMap
const getIconFromWmo = (code, isDay) => {
  const suffix = isDay ? "d" : "n";
  const map = {
    0: "01", // Clear sky
    1: "02", // Mainly clear
    2: "03", // Partly cloudy
    3: "04", // Overcast
    45: "50", // Fog
    48: "50", // Depositing rime fog
    51: "09", // Drizzle
    53: "09",
    55: "09",
    61: "10", // Rain
    63: "10",
    65: "10",
    80: "09", // Rain showers
    81: "09",
    82: "09",
    95: "11", // Thunderstorm
    96: "11",
    99: "11",
  };
  return map[code] ? `${map[code]}${suffix}` : `02${suffix}`;
};

// Mapeo de códigos WMO a descripciones en texto
const getDescriptionFromWmo = (code) => {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Drizzle",
    61: "Rain",
    80: "Showers",
    95: "Thunderstorm",
  };
  return descriptions[code] || "Variable";
};

export default function TimeCard() {
  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState("Locating...");

  // 1. Obtener Geolocalización al montar
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setCoords({ lat, lon });

          // Obtener nombre de la ciudad (API gratuita)
          try {
            const geoRes = await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
            );
            setCity(geoRes.data.city || geoRes.data.locality || "Unknown Location");
          } catch (e) {
            setCity("Unknown Location");
          }
        },
        (error) => {
          console.error("Error getting location", error);
          // Coordenadas por defecto (ej. Londres) si falla
          setCoords({ lat: 51.5074, lon: -0.1278 });
          setCity("London (Default)");
        }
      );
    }
  }, []);

  // 2. Fetch de datos a Open-Meteo usando las coordenadas
  const { data, isLoading } = useSWR(
    coords
      ? `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=sunrise,sunset&timezone=auto`
      : null,
    (url) => axios.get(url).then((res) => res.data)
  );

  const componentToRender = useMemo(() => {
    if (!data) return <NightComponent isLoading={true} />;

    const now = new Date();
    const sunrise = new Date(data.daily.sunrise[0]);
    const sunset = new Date(data.daily.sunset[0]);
    const isDay = isAfter(now, sunrise) && isBefore(now, sunset);

    // Preparamos el objeto de datos unificado para pasar a los hijos
    const weatherProps = {
      temp: Math.round(data.current_weather.temperature),
      description: getDescriptionFromWmo(data.current_weather.weathercode),
      icon: getIconFromWmo(data.current_weather.weathercode, isDay),
      city: city,
      country: "", // Open-Meteo no da país fácil, lo omitimos o sacamos de geocode si es crítico
      isLoading: false,
    };

    if (isDay) {
      return <DayComponent {...weatherProps} />;
    } else {
      return <NightComponent {...weatherProps} />;
    }
  }, [data, city]);

  return (
    <div className={`rounded-3xl flex relative overflow-hidden col-span-2`}>
      {componentToRender}
    </div>
  );
}