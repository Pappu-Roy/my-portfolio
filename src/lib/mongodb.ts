import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env.local");
  }

  if (global.mongooseCache.conn) {
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
}

export default connectDB;
