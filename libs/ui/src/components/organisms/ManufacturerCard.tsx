// import { ManufacturersQuery } from '@recycle-chain/network/src/gql/generated'
// import { useAccount } from '@recycle-chain/util/src/hooks/ether'
// import { ReactNode } from 'react'
// import { CustomDonutChart } from './CustomDonutChart'
// import { DonutChartSimplified } from './DonutChartSimplified'
// import Link from 'next/link'

// export const ManufacturerCard = ({
//   manufacturer,
//   children,
// }: {
//   manufacturer: ManufacturersQuery['manufacturers'][0]
//   children?: ReactNode
// }) => {
//   const { account } = useAccount()
//   const isYou = account.toLowerCase() === manufacturer.id.toLowerCase()

//   return (
//     <div className="bg-white flex flex-col p-4 shadow-lg h-full rounded">
//       <DonutChartSimplified
//         recycled={manufacturer.recycledCount}
//         returned={manufacturer.returnedCount}
//         sold={manufacturer.soldCount}
//         total={manufacturer.totalCount}
//       />

//       <div>
//         <div className="text-center mt-4">
//           <div className="flex items-start justify-center gap-2 mt-4">
//             <h2 className="text-2xl font-semibold text-gray-800">
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

//         <hr className="my-4" />

//         <div className=" space-y-2">
//           <div>
//             <p className="text-gray-700 font-semibold">Address</p>
//             <p className="text-gray-600">{manufacturer.location}</p>
//           </div>
//           <div>
//             <p className="text-gray-700 font-semibold">Contact</p>
//             <p className="text-gray-600">{manufacturer.contact}</p>
//           </div>
//           <div>
//             <p className="text-gray-700 font-semibold">Products</p>
//             <p className="text-gray-600">{manufacturer.productsCount}</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-auto">
//         <div className="flex justify-end mt-4">
//           <Link
//             href={`/manufacturers/${manufacturer.id}`}
//             className="underline underline-offset-4 font-semibold text-lg"
//             key={manufacturer.id}
//           >
//             View
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { ManufacturersQuery } from '@recycle-chain/network/src/gql/generated'
// import { useAccount } from '@recycle-chain/util/src/hooks/ether'
// import { ReactNode } from 'react'
// import { CustomDonutChart } from './CustomDonutChart' // Consider using the styled version
// import { DonutChartSimplified } from './DonutChartSimplified' // Consider replacing with styled version
// import Link from 'next/link'

// export const ManufacturerCard = ({
//   manufacturer,
//   children,
// }: {
//   manufacturer: ManufacturersQuery['manufacturers'][0]
//   children?: ReactNode
// }) => {
//   const { account } = useAccount()
//   const isYou = account.toLowerCase() === manufacturer.id.toLowerCase()

//   return (
//     <div className="bg-white rounded shadow-md flex flex-col p-4 h-full">
//       {/* Styled Donut Chart */}
//       <DonutChartSimplified
//          recycled={manufacturer.recycledCount}
//          returned={manufacturer.returnedCount}
//          sold={manufacturer.soldCount}
//          total={manufacturer.totalCount}
//       />

//       {/* Content Section */}
//       <div className="flex-grow flex flex-col items-center justify-between mt-4">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             {manufacturer.name}
//           </h2>
//           {isYou ? (
//             <div className="bg-black text-xs px-1 py-0.5 text-white rounded-full">
//               You
//             </div>
//           ) : null}
//         </div>
//         <p className="text-gray-500 text-sm mt-2 break-words">
//           {manufacturer.id}
//         </p>

//         {/* Details Section */}
//         <div className="mt-4 space-y-2 text-gray-700">
//           <div className="flex items-center">
//             <span className="mr-2 font-bold">Address:</span>
//             <span className="text-gray-600">{manufacturer.location}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="mr-2 font-bold">Contact:</span>
//             <span className="text-gray-600">{manufacturer.contact}</span>
//           </div>
//           <div className="flex items-center">
//             <span className="mr-2 font-bold">Products:</span>
//             <span className="text-gray-600">{manufacturer.productsCount}</span>
//           </div>
//         </div>
//       </div>

//       {/* View Link */}
//       <div className="mt-auto flex justify-end">
//         <Link
//           href={`/manufacturers/${manufacturer.id}`}
//           className="underline underline-offset-4 font-semibold text-lg text-blue-500 hover:text-blue-700"
//           key={manufacturer.id}
//         >
//           View
//         </Link>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, MapPin, Phone, Boxes } from 'lucide-react'
import { ManufacturersQuery } from '@recycle-chain/network/src/gql/generated'
import { useAccount } from '@recycle-chain/util/src/hooks/ether'
import { DonutChartSimplified } from './DonutChartSimplified'

export const ManufacturerCard = ({
  manufacturer,
}: {
  manufacturer: ManufacturersQuery['manufacturers'][0]
}) => {
  const { account } = useAccount()
  const isYou = account.toLowerCase() === manufacturer.id.toLowerCase()

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Overlay for Chart */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 pb-4">
        <DonutChartSimplified
          recycled={manufacturer.recycledCount}
          returned={manufacturer.returnedCount}
          sold={manufacturer.soldCount}
          total={manufacturer.totalCount}
        />

        {/* You Badge */}
        {isYou && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium tracking-wider">
            Your Profile
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {manufacturer.name}
          </h2>
          <p className="text-sm text-gray-500 truncate max-w-full">
            {manufacturer.id}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-3 mt-4">
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-500 w-5 h-5" />
            <span className="text-gray-700 font-medium">
              {manufacturer.location}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-green-500 w-5 h-5" />
            <span className="text-gray-700 font-medium">
              {manufacturer.contact}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Boxes className="text-purple-500 w-5 h-5" />
            <span className="text-gray-700 font-medium">
              {manufacturer.productsCount} Products
            </span>
          </div>
        </div>

        {/* View Profile Link */}
        <motion.div
          className="mt-6 text-right"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/manufacturers/${manufacturer.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
          >
            <Eye className="mr-2 w-5 h-5" />
            View Profile
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ManufacturerCard
