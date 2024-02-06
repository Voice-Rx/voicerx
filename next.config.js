/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["openweathermap.org"]
    },
    env: {
        weatherKey: 'd650d0b7c10afbe59597377d0ff22ed8',
    }
}

module.exports = nextConfig
