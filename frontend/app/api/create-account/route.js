import https from 'https';

export async function POST(request, res ) {
    //
    const data = await request.json()
   
    const params = JSON.stringify({
        "business_name": data.businessName,
        "settlement_bank": data.bankName, 
        "account_number": data.accountNumber, 
        "percentage_charge": 18.2
    })

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/subaccount',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + process.env.PAYSTACK_SECRET_KEY,
            'Content-Type': 'application/json'
        }
    }

    const paystackReq = https.request(options, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const responseData = JSON.parse(data);

            if (responseData.status) {
                const transactionData = responseData.data;
                res.status(200).json({ message: 'Customer details fetched', data: transactionData });
            } else {
                res.status(404).json({ message: 'Could not get customer details' });
            }
        });
    });

    paystackReq.on('error', (error) => {
        res.status(500).json({ message: error.message });
    });

    paystackReq.write(params)
    paystackReq.end()



}