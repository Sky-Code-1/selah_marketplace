import { MdBookOnline, MdCoffee, MdDeliveryDining, MdDryCleaning, MdHouse, MdPhoneIphone, MdPrint } from 'react-icons/md'
import { FaForward, FaBackward, FaPhone, FaLaptop, FaBook, FaApple, FaBirthdayCake, FaTshirt } from 'react-icons/fa'


export const category = [
    {
    name: 'Phones',
    element: <MdPhoneIphone size={50} />
    },
    {
        name: 'Computers',
        element: <FaLaptop size={50}/>
    },
    {
        name: 'Confectionaries',
        element: <FaBirthdayCake size={50} />
    },
    {
        name: 'Stationery',
        element: <FaBook size={50} />
    },
    {
        name: 'Groceries',
        element: <FaApple size={50} />
    },
    {
        name: 'Stationery',
        element: <FaBook size={50} />
    }
  ]

  export const services = [
    {
        name: 'Tutoring',
        element: <MdBookOnline size={50} />
    },
    {
        name: 'Online Service',
        element: <MdPrint size={50}/>
    },
    {
        name: 'Laundry',
        element: <MdDryCleaning size={50} />
    },
    {
        name: 'Accomodation',
        element: <MdHouse size={50} />
    },
    {
        name: 'Package Delivery',
        element: <MdDeliveryDining size={50} />
    },
    {
        name: 'Fashion Designs',
        element: <FaTshirt size={50} />
    }
  ]