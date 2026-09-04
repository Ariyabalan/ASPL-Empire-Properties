import React, { createContext, useContext, useState } from "react";
import { AMENITIES_MASTER } from "../data/contents/amenitiesMaster";

// Create Context
const CompareContext = createContext(null);

// Currency formatter
export const money = (n) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n);

// Find amenity by ID
export const getAmen = (id) =>
    AMENITIES_MASTER.find((a) => a.id === id);

// Compare Provider
export function CompareProvider({ children }) {
    const [ids, setIds] = useState([]);

    const toggle = (id) => {
        setIds((currentIds) => {
            // Remove if already selected
            if (currentIds.includes(id)) {
                return currentIds.filter((item) => item !== id);
            }

            // Maximum 3 properties
            if (currentIds.length >= 3) {
                return currentIds;
            }

            // Add property
            return [...currentIds, id];
        });
    };

    return (
        <CompareContext.Provider
            value={{
                ids,
                toggle,
            }}
        >
            {children}
        </CompareContext.Provider>
    );
}

// Custom Hook
export function useCompare() {
    const context = useContext(CompareContext);

    if (!context) {
        throw new Error(
            "useCompare must be used inside CompareProvider"
        );
    }

    return context;
}
