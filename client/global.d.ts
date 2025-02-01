declare global {
  interface Window {
    google: any; // Replace `any` with the appropriate type if you know it.
    initMap: () => void;
  }
}

export {};