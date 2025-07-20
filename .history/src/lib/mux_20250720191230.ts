import Mux from "@mux/mux-node";
 MUX_TOKEN_ID=a8faec37-9e17-46a3-b062-c988fc9b5320
MUX_TOKEN_SECRET

export const mux = new Mux({
    tokenId: process.env.MUX_TOKEN_ID,
    tokenSecret: process.env.MUX_TOKEN_SECRET 
})