import React from 'react'
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className={`${geistSans.className} text-3xl text-green-500`}>This is Home page</div>
  )
}
