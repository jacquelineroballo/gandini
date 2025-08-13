import { Skeleton } from "@/components/ui/skeleton";

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navbar Skeleton */}
      <div className="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skeleton className="h-8 w-24" />
          <div className="hidden lg:flex items-center gap-6">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-18" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-4 w-48 mx-auto mb-6" />
          <Skeleton className="h-16 w-full max-w-4xl mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-full max-w-3xl mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-16 w-16 rounded-xl mx-auto mb-6" />
                <Skeleton className="h-6 w-32 mx-auto mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectCardSkeleton = () => (
  <div className="animate-pulse bg-white rounded-lg overflow-hidden shadow-lg">
    <Skeleton className="h-48 w-full" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

export const ServiceCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      <Skeleton className="w-full lg:w-1/2 h-[400px] rounded-lg" />
      <div className="w-full lg:w-1/2 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="space-y-3 my-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              <Skeleton className="h-5 w-5 rounded-full mr-3" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ))}
        </div>
        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  </div>
);