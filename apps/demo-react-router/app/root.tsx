import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import '@workspace/ui/globals.css'

import { Header } from '@workspace/ui/components/header'
import { ThemeProvider } from '@workspace/ui/lib/theme-provider'
import type { Route } from './+types/root'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <NuqsAdapter>
      <ThemeProvider>
        <Header
          logo={
            <svg
              viewBox="0 0 194 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10"
            >
              <g clipPath="url(#clip0_1_8005)">
                <mask id="path-3-inside-1_1_8005" fill="white">
                  <path d="M2 6C2 3.79086 3.79086 2 6 2H188C190.209 2 192 3.79086 192 6V66C192 68.2091 190.209 70 188 70H6.00001C3.79087 70 2 68.2091 2 66V6Z" />
                </mask>
                <path
                  d="M2 6C2 3.79086 3.79086 2 6 2H188C190.209 2 192 3.79086 192 6V66C192 68.2091 190.209 70 188 70H6.00001C3.79087 70 2 68.2091 2 66V6Z"
                  fill="#2C2C2C"
                />
                <path
                  d="M2 6C2 3.79086 3.79086 2 6 2H188C190.209 2 192 3.79086 192 6V66C192 68.2091 190.209 70 188 70H6.00001C3.79087 70 2 68.2091 2 66V6Z"
                  fill="url(#paint0_linear_1_8005)"
                  fillOpacity="0.4"
                />
                <path
                  d="M2 6C2 3.79086 3.79086 2 6 2H188C190.209 2 192 3.79086 192 6V66C192 68.2091 190.209 70 188 70H6.00001C3.79087 70 2 68.2091 2 66V6Z"
                  fill="url(#paint1_linear_1_8005)"
                  fillOpacity="0.2"
                />
                <path
                  d="M6 4H188V0H6V4ZM190 6V66H194V6H190ZM188 68H6.00001V72H188V68ZM4 66V6H0V66H4ZM6.00001 68C4.89543 68 4 67.1046 4 66H0C0 69.3137 2.6863 72 6.00001 72V68ZM190 66C190 67.1046 189.105 68 188 68V72C191.314 72 194 69.3137 194 66H190ZM188 4C189.105 4 190 4.89543 190 6H194C194 2.68629 191.314 0 188 0V4ZM6 0C2.68629 0 0 2.68629 0 6H4C4 4.89543 4.89543 4 6 4V0Z"
                  fill="url(#paint2_linear_1_8005)"
                  mask="url(#path-3-inside-1_1_8005)"
                />
                <g clipPath="url(#clip1_1_8005)">
                  <path
                    d="M87.7301 35.9627C87.7301 37.9841 86.9222 39.8157 85.6182 41.1385C84.3115 42.4641 82.5087 43.2836 80.5135 43.2836C78.5182 43.2836 76.7154 44.1032 75.4114 45.426C74.1047 46.7516 73.2969 48.5804 73.2969 50.6046C73.2969 52.6287 72.489 54.4575 71.185 55.7803C69.8783 57.1059 68.0755 57.9255 66.0803 57.9255C64.085 57.9255 62.2822 57.1059 60.9782 55.7803C59.6715 54.4575 58.8637 52.6259 58.8637 50.6046C58.8637 48.5832 59.6715 46.7516 60.9782 45.426C62.2822 44.1004 64.0877 43.2836 66.0803 43.2836C68.0728 43.2836 69.8783 42.4641 71.185 41.1385C72.4917 39.8157 73.2969 37.9841 73.2969 35.9627C73.2969 31.92 70.0681 28.6418 66.0803 28.6418C64.0877 28.6418 62.2822 27.8223 60.9782 26.4967C59.6715 25.1739 58.8637 23.3423 58.8637 21.3209C58.8637 19.2995 59.6715 17.4679 60.9782 16.1424C62.2822 14.8168 64.0877 14 66.0803 14C70.0654 14 73.2969 17.2782 73.2969 21.3209C73.2969 23.3423 74.1047 25.1739 75.4114 26.4967C76.7154 27.8223 78.5209 28.6418 80.5135 28.6418C84.4986 28.6418 87.7301 31.92 87.7301 35.9627Z"
                    fill="#F44250"
                  />
                  <path
                    d="M58.8664 35.9627C58.8664 31.9195 55.6354 28.6418 51.6498 28.6418C47.6642 28.6418 44.4332 31.9195 44.4332 35.9627C44.4332 40.006 47.6642 43.2836 51.6498 43.2836C55.6354 43.2836 58.8664 40.006 58.8664 35.9627Z"
                    fill="white"
                  />
                  <path
                    d="M44.4332 50.6046C44.4332 46.5613 41.2022 43.2836 37.2166 43.2836C33.231 43.2836 30 46.5613 30 50.6046C30 54.6478 33.231 57.9255 37.2166 57.9255C41.2022 57.9255 44.4332 54.6478 44.4332 50.6046Z"
                    fill="white"
                  />
                  <path
                    d="M102.163 50.6046C102.163 46.5613 98.9323 43.2836 94.9467 43.2836C90.9611 43.2836 87.7301 46.5613 87.7301 50.6046C87.7301 54.6478 90.9611 57.9255 94.9467 57.9255C98.9323 57.9255 102.163 54.6478 102.163 50.6046Z"
                    fill="white"
                  />
                </g>
                <g clipPath="url(#clip2_1_8005)">
                  <path
                    d="M131.275 20.9629V14.3183H164.997V22.5001C150.051 34.5193 149.848 43.1667 149.774 58.2438H138.687C138.914 42.4091 142.139 33.3678 151.826 22.9133H133.241C132.157 22.9133 131.278 22.04 131.278 20.9629H131.275Z"
                    fill="#F44250"
                  />
                  <path
                    d="M117.144 27.0593H107.294L119.889 58.2465H133.238C133.468 44.6708 136.385 35.8609 143.29 27.0565H132.717C132.054 27.0565 131.43 27.3651 131.034 27.894C127.992 31.9353 125.524 39.062 125.524 43.9518L119.634 28.197C119.379 27.5138 118.722 27.0593 117.987 27.0593H117.149H117.144Z"
                    fill="white"
                  />
                </g>
              </g>
              <rect
                x="1"
                y="1"
                width="192"
                height="70"
                rx="5"
                stroke="url(#paint3_linear_1_8005)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_8005"
                  x1="97"
                  y1="2"
                  x2="97"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_8005"
                  x1="221.072"
                  y1="39.9611"
                  x2="176.476"
                  y2="-43.6816"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="#A8A8A6" />
                  <stop offset="0.451645" stopOpacity="#696969" />
                  <stop offset="0.665" stopOpacity="#F9F8F6" />
                  <stop offset="0.825" stopOpacity="#D4D4D4" />
                  <stop offset="1" stopOpacity="#7F7F7F" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_8005"
                  x1="9.41874"
                  y1="2"
                  x2="30.1482"
                  y2="70"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="white" />
                  <stop offset="1" stopOpacity="#525252" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1_8005"
                  x1="97"
                  y1="-5.30726"
                  x2="134.659"
                  y2="91.4304"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AAAAAA" />
                  <stop offset="1" stopColor="#040000" />
                </linearGradient>
                <clipPath id="clip0_1_8005">
                  <rect
                    x="2"
                    y="2"
                    width="190"
                    height="68"
                    rx="4"
                    fill="white"
                  />
                </clipPath>
                <clipPath id="clip1_1_8005">
                  <rect
                    width="72.1633"
                    height="43.9255"
                    fill="white"
                    transform="translate(30 14)"
                  />
                </clipPath>
                <clipPath id="clip2_1_8005">
                  <rect
                    width="57.706"
                    height="43.9255"
                    fill="white"
                    transform="translate(107.294 14.3183)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
        <Outlet />
      </ThemeProvider>
    </NuqsAdapter>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
