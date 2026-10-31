import { useEffect, useRef } from "react";
import L from "leaflet";
import Label from "../../../components/ui/Label.jsx";
import { LOCATIONS } from "../data/content.js";
import "leaflet/dist/leaflet.css";
import "./venue-map.css";

// Use destination pins, rather than the viewport centres, from the supplied place links.
const DAY_ONE_VENUE = [19.1033475, 72.836482];
const MPSTME_VENUE = [19.1079336, 72.8374341];

export default function VenueMap({ day = 0 }) {
  const venue = day === 0
    ? {
        title: "JDSoLA",
        name: "NMIMS · JDSoLA",
        description: "Jyoti Dalal School of Liberal Arts",
        tooltip: "Day 1 venue",
        point: DAY_ONE_VENUE,
      }
    : {
        title: "MPSTME",
        name: "MPSTME · New building",
        description: "Mukesh Patel School of Technology Management & Engineering",
        tooltip: "New building",
        point: MPSTME_VENUE,
      };
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${venue.point.join(",")}`;
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let map;
    let resizeObserver;
    // Fetch map tiles as this chapter approaches, keeping the opening page light.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      map = L.map(mapRef.current, {
        center: venue.point,
        zoom: 16,
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        zoomControl: false,
        zoomAnimation: !reducedMotion,
        fadeAnimation: !reducedMotion,
        markerZoomAnimation: !reducedMotion,
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
      }).addTo(map);
      L.control.zoom({ position: "bottomright" }).addTo(map);
      L.marker(venue.point, {
        title: venue.name,
        alt: venue.name,
        icon: L.divIcon({
          className: "venue-pin",
          html: '<span class="venue-pin-halo"></span><span class="venue-pin-dot"></span>',
          iconSize: [48, 48],
          iconAnchor: [24, 24],
        }),
      }).addTo(map).bindTooltip(
        `<strong>${venue.title}</strong><span>${venue.tooltip}</span>`,
        { permanent: true, direction: "top", offset: [0, -28], className: "venue-pin-label" },
      );
      resizeObserver = new ResizeObserver(() => map.invalidateSize());
      resizeObserver.observe(mapRef.current);
    }, { rootMargin: "400px" });
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
      map?.remove();
    };
  }, [venue.name, venue.point, venue.title, venue.tooltip]);

  return (
    <section className="visit-section" ref={sectionRef} aria-labelledby="visit-title">
      <div className="visit-copy">
        <Label>Plan your visit</Label>
        <h3 id="visit-title">See you in<br /><em>Vile Parle.</em></h3>
        <div className="visit-venue">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <div>
            <h4>{venue.name}</h4>
            <p>{venue.description}</p>
            <span>Vile Parle West, Mumbai</span>
          </div>
        </div>
        <a className="venue-directions" href={directions} target="_blank" rel="noopener noreferrer" aria-label="Get directions in Google Maps (opens in a new tab)">
          <span className="venue-directions-label">Get directions</span>
          <span className="google-maps-lockup" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#34A853" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
              <path fill="#4285F4" d="M7 4a7 7 0 0 0-2 5c0 2 1 4 2 6l5-6Z" />
              <path fill="#FBBC04" d="m7 15 5-6 5-5a7 7 0 0 0-10 0l5 5Z" />
              <path fill="#EA4335" d="m7 4 5 5 5-5A7 7 0 0 0 7 4Z" />
              <circle fill="white" cx="12" cy="9" r="2.5" />
            </svg>
            <span>Maps</span>
          </span>
        </a>
        <p className="visit-link-note">Find your route on Google Maps</p>
        <details className="visit-addresses">
          <summary>Venues & addresses <span aria-hidden="true">+</span></summary>
          <div>
            {LOCATIONS.map((location) => (
              <article key={location.label}>
                <h4>{location.label}</h4>
                <p>{location.venue}</p>
              </article>
            ))}
          </div>
        </details>
      </div>
      <div className="visit-map-frame">
        <div className="venue-map" ref={mapRef} role="region" aria-label={`OpenStreetMap showing ${venue.name} in Mumbai`} />
      </div>
    </section>
  );
}
