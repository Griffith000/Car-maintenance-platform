import {Loader} from "lucide-react"

// Minimal spinner loader for calendar
export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-80">
      <Loader className="animate-spin h-8 w-8 text-gray-500 dark:text-gray-400" />
    </div>
  );
}
