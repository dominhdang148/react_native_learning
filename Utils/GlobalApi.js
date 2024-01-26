import { gql, request } from 'graphql-request';

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clrupb1np04bh01te7fkx074l/master";
const getSliders = async () => {

    const query = gql`
    query GetSliders {
        sliders {
            id
            name
            image {
                url
            }
        }
    } 
    `
    const result = await request(MASTER_URL, query)
    return result;
}


export default {
    getSliders
};