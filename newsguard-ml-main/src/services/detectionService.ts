
import { supabase } from "@/integrations/supabase/client";

export interface DetectionRequest {
  title?: string;
  content: string;
  source?: string;
  url?: string;
  author?: string;
  date?: string;
  userId?: string;
}

export interface DetectionResult {
  isReal: boolean;
  credibilityScore: number;
  explanation: string;
  features: {
    label: string;
    value: number;
  }[];
}

export const detectFakeNews = async (
  requestData: DetectionRequest
): Promise<DetectionResult> => {
  try {
    // Get the current user if logged in
    const { data: { user } } = await supabase.auth.getUser();
    
    // If user is logged in, include the userId in the request
    if (user) {
      requestData.userId = user.id;
    }
    
    const { data, error } = await supabase.functions.invoke('detect-fake-news', {
      body: requestData,
    });

    if (error) {
      console.error('Error calling detection function:', error);
      throw new Error(error.message || 'Failed to analyze content');
    }

    return data as DetectionResult;
  } catch (error) {
    console.error('Detection service error:', error);
    throw error;
  }
};

export const getDetectionHistory = async () => {
  try {
    const { data, error } = await supabase
      .from('detection_history')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    
    return data;
  } catch (error) {
    console.error('Error fetching detection history:', error);
    throw error;
  }
};
