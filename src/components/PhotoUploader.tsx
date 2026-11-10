import React, { useRef } from 'react';
import { Camera, RefreshCw, Upload } from 'lucide-react';
import { usePhoto } from '../context/PhotoContext';

interface PhotoUploaderProps {
  className?: string;
  badgeText?: string;
  aspectSquare?: boolean;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  className = "w-40 h-40",
  badgeText = "TAP TO REPLACE ADARSH'S PIC",
  aspectSquare = true,
}) => {
  const { photo, setPhoto, resetPhoto, isCustom } = usePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative group inline-block">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onClick={() => fileInputRef.current?.click()}
        className={`relative overflow-hidden cursor-pointer border-2 border-red-500/60 rounded-2xl bg-black/50 shadow-lg hover:border-red-400 transition-all duration-300 ${aspectSquare ? 'aspect-square' : ''} ${className}`}
      >
        <img
          src={photo}
          alt="Subject: ALARM"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay with upload icon */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-2 text-center transition-opacity duration-300 backdrop-blur-xs">
          <Camera className="w-8 h-8 text-yellow-400 mb-1 animate-bounce" />
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">
            {badgeText}
          </span>
          <span className="text-[9px] text-gray-300 mt-0.5">Click or drop image</span>
        </div>
      </div>

      {isCustom && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            resetPhoto();
          }}
          title="Reset to cartoon avatar"
          className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full shadow-md text-xs transition-transform hover:scale-110"
        >
          <RefreshCw className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

