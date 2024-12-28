import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export const setPawlyticsToken = async () => {
}

export const getPawlyticsToken = async () => await redis.get("access_token");