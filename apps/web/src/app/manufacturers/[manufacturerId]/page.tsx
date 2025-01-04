// Page component for a specific manufacturer
'use client'
import { AllProducts } from '@traceint/ui/src/components/templates/AllProducts'

export default function Page({
  params,
}: {
  params: { manufacturerId: string }
}) {
  return <AllProducts manufacturerId={params.manufacturerId} />
}
