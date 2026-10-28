"use client"

import Script from "next/script"
import { useState, useSyncExternalStore } from "react"

const onekos = ["/oneko/oneko-dog.gif", "/oneko/oneko.gif", "/oneko/oneko-samy.gif"]
const emptySubscribe = () => () => {}

export default function OnekoCat() {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false)
  const [randomOneko] = useState(() => onekos[Math.floor(Math.random() * onekos.length)])

  if (!isClient || !randomOneko) return null

  return <Script src="/oneko/oneko.js" data-cat={randomOneko} strategy="lazyOnload" />
}
