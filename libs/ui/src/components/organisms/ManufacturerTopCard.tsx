// import { ManufacturersQuery } from '@recycle-chain/network/src/gql/generated'
// import { useAccount } from '@recycle-chain/util/src/hooks/ether'
// import { DonutChartSimplified } from './DonutChartSimplified'
// import { StyledLink } from '../molecules/StyledLink'
// import { IconChevronLeft } from '@tabler/icons-react'

// export const ManufacturerTopCard = ({
//   manufacturer,
//   className,
// }: {
//   manufacturer: ManufacturersQuery['manufacturers'][0]
//   className?: string
// }) => {
//   const { account } = useAccount()
//   const isYou = account.toLowerCase() === manufacturer.id.toLowerCase()

//   return (
//     <div
//       className={` flex flex-col md:flex-row items-center md:items-start md:space-x-6 ${className}`}
//     >
//       <div className="w-full md:w-1/3">
//         <DonutChartSimplified
//           total={manufacturer.totalCount}
//           sold={manufacturer.soldCount}
//           returned={manufacturer.returnedCount}
//           recycled={manufacturer.recycledCount}
//         />
//       </div>
//       <div className="w-full md:w-2/3">
//         <div className="text-center md:text-left">
//           <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {manufacturer.name}
//             </h2>
//             {isYou ? (
//               <div className="bg-black text-xs px-1 py-0.5 text-white">You</div>
//             ) : null}
//           </div>
//           <p className="text-gray-500 mt-1 break-words text-sm">
//             {manufacturer.id}
//           </p>
//         </div>
//         <div className="grid grid-cols-2 gap-3 mt-4">
//           <div>
//             <p className="text-gray-700 font-semibold">Address:</p>
//             <p className="text-gray-600">{manufacturer.location}</p>
//           </div>
//           <div>
//             <p className="text-gray-700 font-semibold">Contact:</p>
//             <p className="text-gray-600">{manufacturer.contact}</p>
//           </div>
//           <div>
//             <p className="text-gray-700 font-semibold">Products:</p>
//             <p className="text-gray-600">{manufacturer.productsCount}</p>
//           </div>
//         </div>
//         <div className="flex justify-start mt-4">
//           <StyledLink
//             href="/manufacturers"
//             className="flex  items-center gap-2"
//           >
//             All manufacturers
//           </StyledLink>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Box, ArrowLeft, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { ManufacturersQuery } from '@recycle-chain/network/src/gql/generated'
import { useAccount } from '@recycle-chain/util/src/hooks/ether'
import { DonutChartSimplified } from './DonutChartSimplified'

export const ManufacturerTopCard = ({
  manufacturer,
  className,
}: {
  manufacturer: ManufacturersQuery['manufacturers'][0]
  className?: string
}) => {
  const { account } = useAccount()
  const isYou = account.toLowerCase() === manufacturer.id.toLowerCase()

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Chart Section */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <DonutChartSimplified
            total={manufacturer.totalCount}
            sold={manufacturer.soldCount}
            returned={manufacturer.returnedCount}
            recycled={manufacturer.recycledCount}
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-3/5 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {manufacturer.name}
              </h2>
              {isYou && (
                <motion.div
                  className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Your Profile
                </motion.div>
              )}
            </div>
          </div>

          {/* Manufacturer ID */}
          <p className="text-gray-500 text-sm bg-gray-50 p-2 rounded-md break-words">
            ID: {manufacturer.id}
          </p>

          {/* Manufacturer Details Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <DetailItem
              icon={<MapPin className="text-blue-500" />}
              label="Address"
              value={manufacturer.location}
            />
            <DetailItem
              icon={<Phone className="text-green-500" />}
              label="Contact"
              value={manufacturer.contact}
            />
            <DetailItem
              icon={<Box className="text-purple-500" />}
              label="Products"
              value={`${manufacturer.productsCount} Products`}
            />
            <DetailItem
              icon={<Users className="text-orange-500" />}
              label="Total Items"
              value={manufacturer.totalCount}
            />
          </div>

          {/* Action Links */}
          <div className="flex space-x-4 mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/manufacturers"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>All Manufacturers</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Reusable Detail Item Component
const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string | number
}) => (
  <div className="bg-gray-50 p-4 rounded-xl flex items-center space-x-4">
    <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-gray-800 font-semibold">{value}</p>
    </div>
  </div>
)

export default ManufacturerTopCard
