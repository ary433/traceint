// import { ProductsQuery } from '@recycle-chain/network/src/gql/generated'
// import { ReactNode } from 'react'
// import { DonutChartSimplified } from './DonutChartSimplified'
// import { ToxicItemsChart } from './ToxicItemsChart'
// import { StyledLink } from '../molecules/StyledLink'

// export interface IProductCardProps {
//   product: NonNullable<ProductsQuery['products']>[0]
//   children?: ReactNode
// }
// export const ProductCard = ({ product, children }: IProductCardProps) => {
//   return (
//     <div className="p-4 shadow-lg overflow-hidden bg-white h-full rounded flex flex-col">
//       <DonutChartSimplified
//         total={product.totalCount}
//         sold={product.soldCount}
//         returned={product.returnedCount}
//         recycled={product.recycledCount}
//       />
//       <div className="text-center mt-4">
//         <h2 className="font-bold text-xl text-gray-800">{product.name}</h2>
//       </div>
//       <div className="text-center mt-1">
//         <h2 className="font-medium text-gray-800">
//           {product.manufacturer.name}
//         </h2>
//       </div>
//       <div className="flex gap-1 justify-center text-sm mt-2 text-gray">
//         <div>{product.totalCount} items</div>
//       </div>
//       <hr className="my-4" />
//       <ToxicItemsChart toxicItems={product.toxicItems} />

//       <div className="mt-auto">
//         <div className="flex justify-end mt-4">
//           <StyledLink href={`/products/${product.id}`} key={product.id}>
//             View
//           </StyledLink>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Eye,
  Package,
  Factory,
  Recycle,
  BarChart,
  AlertTriangle,
} from 'lucide-react'

import { ProductsQuery } from '@recycle-chain/network/src/gql/generated'
import { DonutChartSimplified } from './DonutChartSimplified'
import { ToxicItemsChart } from './ToxicItemsChart'

export interface IProductCardProps {
  product: NonNullable<ProductsQuery['products']>[number]
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Chart Section with Gradient Background */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 pb-4 relative">
        <DonutChartSimplified
          total={product.totalCount}
          sold={product.soldCount}
          returned={product.returnedCount}
          recycled={product.recycledCount}
        />

        {/* Product Stat Badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium tracking-wider flex items-center">
          <Package className="w-4 h-4 mr-1" />
          {product.totalCount} Items
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Factory className="w-5 h-5 text-blue-500" />
            <span className="text-sm">{product.manufacturer.name}</span>
          </div>
        </div>

        {/* Toxic Items Section */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center mb-3 space-x-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-semibold text-gray-800">
              Toxic Items Analysis
            </h3>
          </div>
          <ToxicItemsChart toxicItems={product.toxicItems} />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <MetricBadge
            icon={<Recycle className="w-5 h-5 text-green-500" />}
            label="Recycled"
            value={product.recycledCount}
          />
          <MetricBadge
            icon={<BarChart className="w-5 h-5 text-blue-500" />}
            label="Sold"
            value={product.soldCount}
          />
          <MetricBadge
            icon={<Package className="w-5 h-5 text-purple-500" />}
            label="Returned"
            value={product.returnedCount}
          />
        </div>

        {/* View Details Link */}
        <motion.div
          className="mt-6 text-right"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
          >
            <Eye className="mr-2 w-5 h-5" />
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Reusable Metric Badge Component
const MetricBadge: React.FC<{
  icon: React.ReactNode
  label: string
  value: number
}> = ({ icon, label, value }) => (
  <div className="bg-white border border-gray-100 rounded-lg p-3 text-center shadow-sm">
    <div className="flex justify-center mb-2">{icon}</div>
    <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    <p className="text-lg font-bold text-gray-800">{value}</p>
  </div>
)

export default ProductCard
