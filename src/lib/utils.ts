import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${
    process.env.PORT ?? 3000
  }${path}`
}