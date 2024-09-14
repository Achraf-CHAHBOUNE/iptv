const crypto = require('crypto');

exports.handler = async (event) => {
    const secret = '0KrfmealEWrLApfnAHOO1DgR78uhRyWt'; // Replace with your Sellix webhook secret
    const headerSignature = event.headers['x-sellix-signature']; // Fetch the signature header
    const payload = event.body; // Get the request payload

    // Create a HMAC using the secret and payload
    const signature = crypto
      .createHmac('sha512', secret)
      .update(payload)
      .digest('hex');

    // Compare the generated signature with the header signature
    if (crypto.timingSafeEqual(Buffer.from(signature, 'utf-8'), Buffer.from(headerSignature, 'utf-8'))) {
        // Handle valid webhook
        const data = JSON.parse(payload);
        
        // Example: Handle 'product:created' event
        if (data.event === 'product:created') {
            // Your logic to handle the "product:created" event
            console.log('Product Created Event:', data);
            console.log("nda a said");
        }

        return {
            statusCode: 200,
            body: 'Webhook received and verified',
        };
    } else {
        // Handle invalid webhook
        return {
            statusCode: 401,
            body: 'Invalid signature',
        };
    }
};
