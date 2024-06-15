import {
  BuildingLibraryIcon,
  HeartIcon,
  FaceSmileIcon,
  SparklesIcon,
  GiftTopIcon,
  CakeIcon,
  MusicalNoteIcon,
  StarIcon,
  GlobeAltIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const iconMapping = {
  "Arrival and Seating": BuildingLibraryIcon,
  "Wedding Ceremony": HeartIcon,
  "Cocktail Hour": FaceSmileIcon,
  "Grand Entrance": SparklesIcon,
  "Dinner Service": GiftTopIcon,
  "Cake Cutting": CakeIcon,
  "First Dances": MusicalNoteIcon,
  "Grand Exit": StarIcon,
  "After Party": GlobeAltIcon,
  User: UserIcon,
};

export const Icon = ({ activity }) => {
  const IconComponent = iconMapping[activity] || BuildingLibraryIcon; // default icon if activity not found
  return <IconComponent className=" mx-auto h-7 w-7 self-center" />;
};
