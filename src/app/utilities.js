import { MdBookOnline, MdUpgrade, MdStore, MdPeople, MdCoffee, MdDeliveryDining, MdDryCleaning, MdHouse, MdPhoneIphone, MdPrint } from 'react-icons/md'
import { FaForward, FaBackward, FaPhone, FaLaptop, FaBook, FaApple, FaBirthdayCake, FaTshirt, FaDollarSign } from 'react-icons/fa'
import { FaNairaSign } from 'react-icons/fa6'


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
  export const metrics = [
    {
        name: 'Growing Active Sellers',
        element: <MdStore size={30} color='#fff' />
    },
    {
        name: 'Continuous Upgrade',
        element: <MdUpgrade size={30} color='#fff'/>
    },
    {
        name: 'Increasing Customers',
        element: <MdPeople size={30} color='#fff' />
    },
    {
        name: 'Increase your sales',
        element: <FaNairaSign size={30} color='#fff' />
    }
  ]