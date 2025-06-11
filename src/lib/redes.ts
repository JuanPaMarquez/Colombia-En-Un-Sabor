import { redesIcon } from "../utils/redIcons"

interface Red {
  id: number,
  nombre: string,
  link: string,
  icon: React.JSX.Element,
}

export const redes: Red[] = [
  {
    id: 1,
    nombre: "Instagram",
    link: "https://www.instagram.com/colombiaenunsabor/",
    icon: redesIcon.instagram
  },
  {
    id: 2,
    nombre: "Gmail",
    link: "mailto:colombiaenunsabor@gmail.com",
    icon: redesIcon.gmail
  }
]