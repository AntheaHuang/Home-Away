"use client";

import { amenities, Amenity } from "@/utils/amenities";
import Title from "./Title";

export default function Amenities({
  propertyAmenities,
}: {
  propertyAmenities: Amenity[];
}) {
  if (propertyAmenities.length === 0) return null;

  const propertyAmenitiesWithIcons = propertyAmenities.map(
    ({ name, selected }) => {
      return {
        name,
        selected,
        icon: amenities.find((amenity) => amenity.name === name)!.icon,
      };
    }
  );

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {propertyAmenitiesWithIcons.map((amenity) => {
          if (!amenity.selected) return null;
          return (
            <div key={amenity.name} className="flex items-center gap-x-2 mb-2">
              <amenity.icon className="w-6 h-6 text-primary" />
              <span className="font-light text-sm capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
