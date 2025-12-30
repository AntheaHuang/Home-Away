import { IconType } from "react-icons";
export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};
import {
  Bath,
  Bubbles,
  Bed,
  Tv,
  Speaker,
  BookOpen,
  Baby,
  Snowflake,
  Thermometer,
  Camera,
  AlarmSmoke,
  Siren,
  FireExtinguisher,
  BriefcaseMedical,
  Wifi,
  Utensils,
  Refrigerator,
  Microwave,
  Soup,
  SnowflakeIcon,
  ChefHat,
  Coffee,
  SoupIcon,
  Trees,
  ParkingCircle,
  PawPrint,
  Key,
  WashingMachine,
  Shirt,
} from "lucide-react";

export const amenities: Amenity[] = [
  // Bathroom
  { name: "Shampoo and Body Wash", icon: Bubbles, selected: false },
  { name: "Hot water", icon: Bath, selected: false },

  // Bedroom and laundry
  { name: "Bed linens", icon: Bed, selected: false },

  // Entertainment
  { name: "TV", icon: Tv, selected: false },
  { name: "Sound system", icon: Speaker, selected: false },
  { name: "Books and reading material", icon: BookOpen, selected: false },

  // Family
  { name: "Crib", icon: Baby, selected: false },

  // Heating and cooling
  { name: "Air conditioning", icon: Snowflake, selected: false },
  { name: "Heating", icon: Thermometer, selected: false },

  // Home safety
  {
    name: "Exterior security cameras on property",
    icon: Camera,
    selected: false,
  },
  { name: "Smoke alarm", icon: AlarmSmoke, selected: false },
  { name: "Carbon monoxide alarm", icon: Siren, selected: false },
  { name: "Fire extinguisher", icon: FireExtinguisher, selected: false },
  { name: "First aid kit", icon: BriefcaseMedical, selected: false },

  // Internet and office
  { name: "Wifi", icon: Wifi, selected: false },

  // Kitchen and dining
  { name: "Kitchen", icon: Utensils, selected: false },
  { name: "Refrigerator", icon: Refrigerator, selected: false },
  { name: "Microwave", icon: Microwave, selected: false },
  {
    name: "Cooking basics",
    icon: Soup,
    selected: false,
  },
  { name: "Dishes and silverware", icon: SoupIcon, selected: false },
  { name: "Freezer", icon: SnowflakeIcon, selected: false },
  { name: "Stove", icon: ChefHat, selected: false },
  { name: "Hot water kettle", icon: Coffee, selected: false },
  { name: "Coffee maker", icon: Coffee, selected: false },

  // Outdoor
  { name: "Hammock", icon: Trees, selected: false },

  // Parking and facilities
  { name: "Free parking on premises", icon: ParkingCircle, selected: false },

  // Services
  { name: "Pets allowed", icon: PawPrint, selected: false },
  { name: "Self check-in", icon: Key, selected: false },
  { name: "Washer", icon: WashingMachine, selected: false },
  { name: "Dryer", icon: Shirt, selected: false },
];
