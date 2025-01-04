// import {
//   ProductItemsQuery,
//   ProductStatus,
// } from '@recycle-chain/network/src/gql/generated'
// import { Timeline } from './Timeline'
// import { UpdateProductItemStatusButton } from './ActionButtons'

// export interface IProductItemCardProps {
//   productItem: NonNullable<ProductItemsQuery['productItems']>[0]
//   isOwner?: boolean
// }

// export const ProductItemCard = ({
//   productItem,

//   isOwner = false,
// }: IProductItemCardProps) => {
//   return (
//     <div
//       className={`p-4 bg-white rounded ${productItem.status === ProductStatus.Recycled ? 'border-2 border-green-600 shadow-lg' : ''}`}
//     >
//       <div className="flex flex-col">
//         <div className="text-3xl mt-2 font-light mb-2 ">{productItem.id}</div>
//         <div className="text-sm text-gray">{productItem.product.name}</div>
//       </div>
//       <Timeline events={productItem.transactions} className="mt-6" />
//       <div className="flex gap-2 mt-6 items-center justify-end">
//         {isOwner ? (
//           <div className="flex justify-end">
//             <UpdateProductItemStatusButton
//               id={productItem.id}
//               currentStatus={productItem.status}
//             />
//           </div>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// import {
//   ProductItemsQuery,
//   ProductStatus,
// } from '@recycle-chain/network/src/gql/generated';
// import { Timeline } from './Timeline';
// import { UpdateProductItemStatusButton } from './ActionButtons';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle, XCircle, ClipboardCheck, Info, Tag } from 'lucide-react';

// export interface IProductItemCardProps {
//   productItem: NonNullable<ProductItemsQuery['productItems']>[0];
//   isOwner?: boolean;
// }

// export const ProductItemCard = ({
//   productItem,
//   isOwner = false,
// }: IProductItemCardProps) => {
//   const isRecycled = productItem.status === ProductStatus.Recycled;

//   const getStatusAnimation = (status: ProductStatus) => {
//     switch (status) {
//       case ProductStatus.Manufactured:
//         return { color: '#3b82f6', icon: <Info className="w-6 h-6" /> };
//       case ProductStatus.Sold:
//         return { color: '#f59e0b', icon: <ClipboardCheck className="w-6 h-6" /> };
//       case ProductStatus.Returned:
//         return { color: '#ef4444', icon: <XCircle className="w-6 h-6" /> };
//       case ProductStatus.Recycled:
//         return { color: '#22c55e', icon: <CheckCircle className="w-6 h-6" /> };
//       default:
//         return { color: '#6b7280', icon: <Tag className="w-6 h-6" /> };
//     }
//   };

//   const statusAnimation = getStatusAnimation(productItem.status);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       whileHover={{ scale: 1.05 }}
//       className={`p-6 bg-white rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl ${
//         isRecycled ? 'border-green-500' : 'border-gray-300'
//       }`}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex flex-col gap-1">
//           <div className="flex items-center gap-2">
//             <Tag className="text-gray-500 w-4 h-4" />
//             <h2 className="text-lg font-semibold text-gray-800">
//               {productItem.product.name}
//             </h2>
//           </div>
//           <p className="text-sm text-gray-500 flex items-center gap-1">
//             <Info className="w-4 h-4" /> ID: {productItem.id}
//           </p>
//         </div>
//         <AnimatePresence>
//           <motion.div
//             key={productItem.status}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             className="flex items-center gap-2"
//             style={{ color: statusAnimation.color }}
//           >
//             {statusAnimation.icon}
//             <span className="text-sm font-medium">
//               {productItem.status}
//             </span>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <Timeline events={productItem.transactions} className="mt-4" />

//       <div className="flex items-center justify-between mt-6">
//         <div className="flex items-center gap-2">
//           <ClipboardCheck className="text-blue-500 w-5 h-5" />
//           <span className="text-sm text-gray-600">
//             {productItem.transactions.length} Transactions
//           </span>
//         </div>

//         {isOwner && (
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.1 }}
//           >
//             <UpdateProductItemStatusButton
//               id={productItem.id}
//               currentStatus={productItem.status}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-md"
//             />
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

import {
  ProductItemsQuery,
  ProductStatus,
} from '@recycle-chain/network/src/gql/generated'
import { Timeline } from './Timeline'
import { UpdateProductItemStatusButton } from './ActionButtons'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, ClipboardCheck, Info, Tag } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useEffect, useRef } from 'react'

export interface IProductItemCardProps {
  productItem: NonNullable<ProductItemsQuery['productItems']>[0]
  isOwner?: boolean
}

export const ProductItemCard = ({
  productItem,
  isOwner = false,
}: IProductItemCardProps) => {
  const isRecycled = productItem.status === ProductStatus.Recycled
  const cardRef = useRef<HTMLDivElement>(null)

  const getStatusAnimation = (status: ProductStatus) => {
    switch (status) {
      case ProductStatus.Manufactured:
        return { color: '#3b82f6', icon: <Info className="w-6 h-6" /> }
      case ProductStatus.Sold:
        return {
          color: '#f59e0b',
          icon: <ClipboardCheck className="w-6 h-6" />,
        }
      case ProductStatus.Returned:
        return { color: '#ef4444', icon: <XCircle className="w-6 h-6" /> }
      case ProductStatus.Recycled:
        return { color: '#22c55e', icon: <CheckCircle className="w-6 h-6" /> }
      default:
        return { color: '#6b7280', icon: <Tag className="w-6 h-6" /> }
    }
  }

  const statusAnimation = getStatusAnimation(productItem.status)

  useEffect(() => {
    if (isRecycled && cardRef.current) {
      const { top, left, width, height } =
        cardRef.current.getBoundingClientRect()
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (left + width / 2) / window.innerWidth,
          y: (top + height / 2) / window.innerHeight,
        },
      })
    }
  }, [isRecycled])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`p-6 bg-white rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl ${
        isRecycled ? 'border-green-500' : 'border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Tag className="text-gray-500 w-4 h-4" />
            <h2 className="text-lg font-semibold text-gray-800">
              {productItem.product.name}
            </h2>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Info className="w-4 h-4" /> ID: {productItem.id}
          </p>
        </div>
        <AnimatePresence>
          <motion.div
            key={productItem.status}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center gap-2"
            style={{ color: statusAnimation.color }}
          >
            {statusAnimation.icon}
            <span className="text-sm font-medium">{productItem.status}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <Timeline events={productItem.transactions} className="mt-4" />

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          <ClipboardCheck className="text-blue-500 w-5 h-5" />
          <span className="text-sm text-gray-600">
            {productItem.transactions.length} Transactions
          </span>
        </div>

        {isOwner && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <UpdateProductItemStatusButton
              id={productItem.id}
              currentStatus={productItem.status}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-md"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
