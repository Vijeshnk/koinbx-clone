"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const AnnouncementModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the announcement in this session
    const hasSeenAnnouncement = sessionStorage.getItem('hasSeenAnnouncement');
    
    if (!hasSeenAnnouncement) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen in session storage
    sessionStorage.setItem('hasSeenAnnouncement', 'true');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close modal if clicking outside the content area
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-hidden animate-fade-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          aria-label="Close announcement"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Announcement image */}
        <div className="w-full">
          <Image
            src="/assets/img/NewUI/image.png"
            alt="KoinBX Announcement - Before making a deposit, verify the KoinBX's newly added bank details"
            width={400}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
