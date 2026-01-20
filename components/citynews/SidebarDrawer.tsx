// components/citynews/SidebarDrawer.tsx
"use client";

import React, { useState } from "react";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react"; // Use better open/close icons
import LatestSidebar from "./LatestSidebar";
import OpinionSidebar from "./OpinionSidebar";


export default function SidebarDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - always visible, positioned nicely */}
      <button
        className={`
          fixed top-20 left-4 z-40 
          bg-white border border-gray-200 shadow-sm rounded-full p-3 
          text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 hover:border-yellow-300 
          transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <PanelLeftClose className="w-6 h-6" />
        ) : (
          <PanelLeftOpen className="w-6 h-6" />
        )}
      </button>

      {/* Overlay + Flyout Sidebar */}
      {isOpen && (
        <>
          {/* Semi-transparent backdrop - click to close */}
          <div
            className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar panel - slides in from left */}
          <div
            className={`
              fixed top-0 left-0 h-full w-80 sm:w-96 max-w-[90vw] 
              bg-white shadow-2xl z-50 overflow-hidden
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Header with close */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900">
                Latest & Opinion
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition p-1 rounded-full hover:bg-gray-200"
                aria-label="Close"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="p-5 overflow-y-auto h-[calc(100%-4.5rem)] space-y-12">
              <LatestSidebar />
              <OpinionSidebar />
            </div>
          </div>
        </>
      )}
    </>
  );
}