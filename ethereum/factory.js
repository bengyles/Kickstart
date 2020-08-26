import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x045b8a386642091D894da201Deb5E8C69a49099E',
);

export default instance;
