'use client';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Return() {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/' || (
        <Link href="../">
          <div className="
            fixed w-8 h-8 bottom-2 right-2
            flex flex-col text-center justify-center
            p-1 transition rounded-full
            bg-blue-300 hover:bg-blue-400 active:bg-blue-500"
          >
            {'<'}
          </div>
        </Link>
      )}
    </>
  )
}