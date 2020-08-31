import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x8522d9979C343C05B2FEf9770CFeDC666C838226',
);

export default instance;
