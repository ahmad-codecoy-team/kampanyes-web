import { apiClient } from '@/lib/apiClient';
import { ENDPOINTS } from '@/config/endpoints';
import type { ContentResponse } from '@/types/content';

export const contentService = {
  getAbout: async (): Promise<ContentResponse> => {
    return apiClient.get<ContentResponse>(ENDPOINTS.CONTENT.ABOUT);
  },

  getPrivacyPolicy: async (): Promise<ContentResponse> => {
    return apiClient.get<ContentResponse>(ENDPOINTS.CONTENT.PRIVACY_POLICY);
  },

  getTermsConditions: async (): Promise<ContentResponse> => {
    return apiClient.get<ContentResponse>(ENDPOINTS.CONTENT.TERMS_CONDITIONS);
  },
} as const;
