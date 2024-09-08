<script lang="ts">
  import { onMount } from "svelte";

  let map: any;

  export let lat = 9.988641;
  export let lng = -84.150022;

  onMount(async () => {
    if (typeof window !== "undefined") {
      const L = await import("leaflet"); // Import leaflet dynamically
      import("leaflet/dist/leaflet.css"); // Import CSS dynamically

      // Set custom marker icon
      const customIcon = L.icon({
        iconUrl: "./icons/placeholder_(1).png", // Replace with the actual path to your custom icon
        shadowUrl: "./icons/placeholder_(1).png", // Replace with the actual path to your custom shadow
        iconSize: [41, 41], // Size of the icon
        iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
        popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
        shadowSize: [41, 41], // Size of the shadow (if you're using one)
      });

      map = L.map("map").setView([lat, lng], 100);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      L.marker([lat, lng], { icon: customIcon }).addTo(map);
    }
  });

  $: {
    if (map) {
      map.setView([lat, lng], 100);
    }
  }
</script>

<div class="map" id="map"></div>

<style>
  .map {
    height: 100%;
    width: 100%;
  }
</style>
