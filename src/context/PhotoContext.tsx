import React, { createContext, useContext, useState, useEffect } from 'react';

// Default funny illustration avatar for "ALARM" Adarsh
export const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";

// Fallback cool cartoon alarm face SVG data URI if offline
export const CARTOON_ALARM_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <rect width="100%" height="100%" fill="%231a0b2e"/>
  <circle cx="100" cy="115" r="65" fill="%23ff1a40" stroke="%23ffeb3b" stroke-width="6"/>
  <!-- Clock bells -->
  <circle cx="50" cy="55" r="22" fill="%23ffd700" stroke="%23333" stroke-width="4"/>
  <circle cx="150" cy="55" r="22" fill="%23ffd700" stroke="%23333" stroke-width="4"/>
  <path d="M 90 40 L 110 40" stroke="%23ddd" stroke-width="6" stroke-linecap="round"/>
  <!-- Clock Face -->
  <circle cx="100" cy="115" r="50" fill="%23ffffff"/>
  <!-- Derpy eyes -->
  <circle cx="82" cy="105" r="12" fill="%23000"/>
  <circle cx="85" cy="102" r="4" fill="%23fff"/>
  <circle cx="118" cy="105" r="14" fill="%23000"/>
  <circle cx="120" cy="102" r="5" fill="%23fff"/>
  <!-- Chaotic smirk / tongue -->
  <path d="M 80 130 Q 100 155 120 130" stroke="%23ff003c" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M 95 137 Q 100 150 105 137" fill="%23ff6b8b"/>
  <!-- Little alarm clock feet -->
  <line x1="65" y1="172" x2="50" y2="190" stroke="%23ffd700" stroke-width="6" stroke-linecap="round"/>
  <line x1="135" y1="172" x2="150" y2="190" stroke="%23ffd700" stroke-width="6" stroke-linecap="round"/>
</svg>`;

interface PhotoContextType {
  photo: string;
  setPhoto: (url: string) => void;
  resetPhoto: () => void;
  isCustom: boolean;
}

const PhotoContext = createContext<PhotoContextType>({
  photo: CARTOON_ALARM_AVATAR,
  setPhoto: () => {},
  resetPhoto: () => {},
  isCustom: false,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photo, setPhotoState] = useState<string>(() => {
    return localStorage.getItem('adarsh_photo') || CARTOON_ALARM_AVATAR;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return !!localStorage.getItem('adarsh_photo');
  });

  const setPhoto = (newPhoto: string) => {
    setPhotoState(newPhoto);
    localStorage.setItem('adarsh_photo', newPhoto);
    setIsCustom(true);
  };

  const resetPhoto = () => {
    setPhotoState(CARTOON_ALARM_AVATAR);
    localStorage.removeItem('adarsh_photo');
    setIsCustom(false);
  };

  return (
    <PhotoContext.Provider value={{ photo, setPhoto, resetPhoto, isCustom }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);

