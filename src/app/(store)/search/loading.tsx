import { Skeleton } from '@/components/skeleton'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">...</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map(() => {
          const uniqueKey = crypto.randomUUID()
          return <Skeleton key={uniqueKey} className="h-[480px]" />
        })}
      </div>
    </div>
  )
}
