import { describe, it } from 'vitest';
import { loadEnvConfig } from '@next/env';
import { fetchPawlyticsAuthResponse } from '@/utils/authenticate-pawlytics';

loadEnvConfig('.')
describe('fetchAuthResponse', () => {
    it('should get auth response', async () => {
        const response = await fetchPawlyticsAuthResponse();
        console.log(response)
    })
})