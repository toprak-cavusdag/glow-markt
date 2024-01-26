import { GrDeliver } from 'react-icons/gr';
import { MdOutlineLocalPhone } from 'react-icons/md';

import { GoGift } from 'react-icons/go';

export const HeaderBottomValue = [
  {
    id: 1,
    icon: <GrDeliver size={30} />,
    title: 'Free Shipping',
  },
  {
    id: 2,
    icon: <MdOutlineLocalPhone size={30} />,
    title: '24 Hours Support',
    boldness: true,
  },
  {
    id: 3,
    icon: <GoGift size={28} />,
    title: 'Gift For Friend',
  },
];
