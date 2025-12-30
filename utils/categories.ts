import { IconType } from "react-icons";
import { MdCabin } from "react-icons/md";

import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";

import { GiWoodCabin } from "react-icons/gi";
import { PiHouseLine, PiBuildingApartment } from "react-icons/pi";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "cabin"
  | "tent"
  | "cottage"
  | "caravan"
  | "apartment"
  | "house"
  | "single room"
  | "lodge";

export const categories: Category[] = [
  {
    label: "cabin",
    icon: MdCabin,
  },
  {
    label: "tent",
    icon: TbTent,
  },
  {
    label: "apartment",
    icon: PiBuildingApartment,
  },
  {
    label: "cottage",
    icon: TbBuildingCottage,
  },
  {
    label: "house",
    icon: PiHouseLine,
  },
  {
    label: "caravan",
    icon: TbCaravan,
  },

  {
    label: "single room",
    icon: MdOutlineBedroomParent,
  },
  {
    label: "lodge",
    icon: GiWoodCabin,
  },
];
