// import { ProductsQuery } from '@recycle-chain/network/src/gql/generated'
// import { ReactNode } from 'react'
// import { DonutChartSimplified } from './DonutChartSimplified'
// import { ToxicItemsChart } from './ToxicItemsChart'
// import { StyledLink } from '../molecules/StyledLink'

// export interface IProductTopCard {
//   product: NonNullable<ProductsQuery['products']>[0]
//   children?: ReactNode
// }
// export const ProductTopCard = ({ product, children }: IProductTopCard) => {
//   return (
//     <div className=" flex flex-col md:flex-row items-center md:items-start md:space-x-6">
//       <div className="w-full md:w-1/3">
//         <DonutChartSimplified
//           total={product.totalCount}
//           sold={product.soldCount}
//           returned={product.returnedCount}
//           recycled={product.recycledCount}
//         />
//       </div>
//       <div className="w-full md:w-2/3">
//         {' '}
//         <div className="text-center md:text-left">
//           <h2 className="font-bold text-xl text-gray-800">{product.name}</h2>
//           <h3 className="font-medium text-gray-800 ">
//             {product.manufacturer.name}
//           </h3>
//         </div>
//         <div className="flex gap-1 justify-center md:justify-start mt-2 text-gray-600">
//           <div>{product.totalCount} items</div>
//         </div>
//         <div className="mt-4 max-w-96">
//           <ToxicItemsChart toxicItems={product.toxicItems} />
//         </div>
//         <div className="flex mt-8">
//           <StyledLink href="/products" className="flex  items-center gap-2">
//             All products
//           </StyledLink>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { motion } from 'framer-motion'
import {
  Package,
  Factory,
  Recycle,
  BarChart,
  ArrowLeft,
  AlertTriangle,
} from 'lucide-react'
import Link from 'next/link'
import { ProductsQuery } from '@recycle-chain/network/src/gql/generated'
import { DonutChartSimplified } from './DonutChartSimplified'
import { ToxicItemsChart } from './ToxicItemsChart'

export interface IProductTopCardProps {
  product: NonNullable<ProductsQuery['products']>[number]
}

export const ProductTopCard: React.FC<IProductTopCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Chart Section */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <DonutChartSimplified
            total={product.totalCount}
            sold={product.soldCount}
            returned={product.returnedCount}
            recycled={product.recycledCount}
          />

          {/* Product Stat Badge */}
          <div className="mt-4 flex justify-center items-center bg-white rounded-full px-4 py-2 shadow-md">
            <Package className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-gray-800 font-medium">
              {product.totalCount} Total Items
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-3/5 space-y-6">
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
              <Factory className="w-5 h-5 text-blue-500" />
              <span className="text-sm">{product.manufacturer.name}</span>
            </div>
          </div>

          {/* Toxic Items Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4 space-x-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-800">
                Toxic Items Analysis
              </h3>
            </div>
            <ToxicItemsChart toxicItems={product.toxicItems} />
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-4">
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

          {/* Action Links */}
          <div className="flex space-x-4 mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/products"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>All Products</span>
              </Link>
            </motion.div>
          </div>
        </div>
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

export default ProductTopCard
