import dotenv from "dotenv"
dotenv.config({ path: 'config/.env' })

export const PORT = process.env.PORT || 8000
export const mxConn = 5
export const minConn = 0
export const expireTokenIn = '30m'
export const secretKey= process.env.JWT_SECRET || 'secret'

export const dbName = process.env.DB_DATABASE
export const dbUser = process.env.DB_USER
export const dbPasswrod = process.env.DB_PASSWORD
export const dbHost = process.env.DB_HOST

