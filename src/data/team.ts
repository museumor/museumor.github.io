export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { name: "Colin Northway", role: "Founder", image: "/images/team/colin-northway.jpg" },
  { name: "Robin Stethem", role: "Founder/CEO", image: "/images/team/robin-stethem.jpg" },
  { name: "Stephen Gray", role: "Software Engineer", image: "/images/team/stephen-gray.jpg" },
  { name: "Lindsay Jorgensen", role: "Technical Artist", image: "/images/team/lindsay-jorgensen.jpg" },
  { name: "Adam Madojemu", role: "Brand Manager", image: "/images/team/adam-madojemu.jpg" },
  { name: "Adiba Muzaffar", role: "Content Strategist", image: "/images/team/adiba-muzaffar.jpg" },
  { name: "Em Halberstadt", role: "Sound Designer", image: "/images/team/em-halberstadt.png" },
  { name: "Nicholas Zhang", role: "Audio Programmer", image: "/images/team/nicholas-zhang.jpg" },
  { name: "Maris Tammik", role: "Audio Programmer", image: "/images/team/maris-tammik.jpg" },
];
