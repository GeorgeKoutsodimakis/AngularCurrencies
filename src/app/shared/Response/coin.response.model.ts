import { CoinList } from '../Model/coinlist.model';

export class CoinResponse {
    Response: string;
    Message: string;
    Data: CoinList[];
    BaseImageUrl: string;
    BaseLinkUrl: string;
    RateLimit: string;
    HasWarning: string;
    Type: string;
}