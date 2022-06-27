import React, { Fragment } from "react";
import axios from "axios";

const App = () => {    
    const pinJSONToIPFS = (JSONBody) => {
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      axios 
        .post(url, JSONBody, {
          headers: {
            pinata_api_key: "YOUR_PINATA_API_KEY",
            pinata_secret_api_key: "YOUR_PINATA_SECRET_KEY",
          }
        })
        .then(function (response) {
          return {
            success: true,
            pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
          };
        })
        .catch(function (error) {
          console.log(error)
          return {
            success: false,
            message: error.message,
          }
        })
    }
    return(
        <Fragment>
          <button onClick={() => pinJSONToIPFS(null, "string")}>
            pinJSONToIPFS
          </button>
        </Fragment>
    )
}

export default App;
