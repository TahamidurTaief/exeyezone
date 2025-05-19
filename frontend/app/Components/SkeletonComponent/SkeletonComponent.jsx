import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonComponent = () => {
  return (
    <div>
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
            </div>
        </div>
    </div>
  )
}

export default SkeletonComponent
