/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if(!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const app: Application = express()

/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * Server Activation
 */

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))
