'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const menuItems = [
  { title: 'Home' }, // Home has no subItems
  { title: 'Cassette Details', subItems: ['Songs', 'Programmes', 'Video Clips', 'News Clips', 'Foreign Programmes'] },
  { title: 'Lending', subItems: ['Add', 'Edit'] },
  { title: 'Return', subItems: ['Cassette'] },
  { title: 'Search', subItems: ['Lendings', 'Cassette Details', 'XD CAM Report'] },
  { title: 'Add Users', subItems: ['New User', 'Edit User', 'Remove User', 'User Roles'] },
  { title: 'Producers', subItems: ['Add Producer', 'Edit Producer', 'Delete Producer', 'Producer List'] },
  { title: 'Reports', subItems: ['Producer List'] },
];

export default function SideNavMenu() {
  const [openMenus, setOpenMenus] = useState({});
  const router = useRouter(); // Initialize the router

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleHomeClick = () => {
    router.push('/homepage'); // Navigate to homepage
  };

  return (
    <div className="w-64 h-screen bg-gray-400 p-4 border-r">
      {menuItems.map((item) => (
        <div key={item.title}>
          <button
            className={`w-full flex justify-between items-center p-3 rounded-md my-2 text-black ${
              openMenus[item.title] ? 'bg-yellow-400' : 'bg-gray-200'
            } ${!item.subItems ? 'cursor-pointer' : ''}`} // Add cursor-pointer for Home
            onClick={() => item.subItems ? toggleMenu(item.title) : handleHomeClick()} // Handle Home click
          >
            {item.title}
            {item.subItems && ( // Only show ChevronDown if subItems exist
              <ChevronDown className={`transition-transform ${openMenus[item.title] ? 'rotate-180' : ''}`} />
            )}
          </button>
          {item.subItems && ( // Only render submenu if subItems exist
            <AnimatePresence>
              {openMenus[item.title] && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-5 bg-gray-200 rounded-md overflow-hidden"
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem} className="p-2 hover:bg-gray-300 cursor-pointer text-black">
                      {subItem}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
}