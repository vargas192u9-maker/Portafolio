import { Code2, Globe, Smartphone, Database, KeyRound, type LucideIcon } from "lucide-react";
export const skillGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: "Lenguajes de programación", icon: Code2, items: ["Java", "C#", "PHP", "JavaScript"] },
  { title: "Desarrollo web", icon: Globe, items: ["HTML", "CSS", "JavaScript", "PHP"] },
  { title: "Desarrollo Android", icon: Smartphone, items: ["Java", "XML"] },
  { title: "Bases de datos", icon: Database, items: ["SQL"] },
  { title: "Integraciones", icon: KeyRound, items: ["Autenticación con Google"] },
];
