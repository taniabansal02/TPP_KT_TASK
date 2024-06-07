export interface Base<T> {
    message: string;
    data: T | undefined;
    success: boolean;
    status_code: number;
    credit_card_id: string;
    contestant_id: number;
    gallery_id: number;
  }
  