"use client"
import Script from "next/script"
import React from "react"
import { useEffect, useState } from "react"
const onekos = ["/oneko/oneko-dog.gif", "/oneko/oneko.gif" , "/oneko/oneko-samy.gif"]

export default function OnekoCat() {
  const [randomOneko , setRandomOneko] = useState<string | null>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * onekos.length);
    setRandomOneko(onekos[randomIndex]);
  }, []);

  if (!randomOneko) return null;

  return <Script src="/oneko/oneko.js" data-cat={randomOneko} strategy="lazyOnload" />
}
