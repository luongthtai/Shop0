import { AiOutlineCamera, AiOutlineCar, AiOutlineMobile } from "react-icons/ai"
import { IoGameControllerOutline, IoShirtOutline } from 'react-icons/io5'
import { MdOutlineChair, MdSportsSoccer } from "react-icons/md"
import { FiCoffee } from 'react-icons/fi'
import { BiBath } from "react-icons/bi"
import { GiBabyBottle, GiLipstick } from 'react-icons/gi'

const Category = [
    {
        name: "Mobile & Laptops",
        icon: <AiOutlineMobile />
    },
    {
        name: "Gaming Entertaiment",
        icon: <IoGameControllerOutline />
    },
    {
        name: "Image & Video",
        icon: <AiOutlineCamera />
    },
    {
        name: "Vehicles",
        icon: <AiOutlineCar />
    },
    {
        name: "Furnitures",
        icon: <MdOutlineChair />
    },
    {
        name: "Sport",
        icon: <MdSportsSoccer />
    },
    {
        name: "Food & Drinks",
        icon: <FiCoffee />
    },
    {
        name: "Fashion Accessories",
        icon: <IoShirtOutline />
    },
    {
        name: "Toilet & Sanitation",
        icon: <BiBath />
    },
    {
        name: "Makeup Corner",
        icon: <GiLipstick />
    },
    {
        name: "Baby Items",
        icon: <GiBabyBottle />
    },
]

export { Category }