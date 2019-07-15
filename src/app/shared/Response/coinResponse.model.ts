import { CoinList } from '../Model/coinList.model';

export class coinResponse {
    Response: string;
    Message: string;
    Data: CoinList[];
    BaseImageUrl: string;
    BaseLinkUrl: string;
    RateLimit: string;
    HasWarning: string;
    Type: string;
}