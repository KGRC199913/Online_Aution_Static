const config = require('../config/default.json');
module.exports = {
    bidsuccess: (seller, bidder, lastbidder, ProName, CurPrice) => {
        const msg = [{
                to: 'customer@gmail.com',
                bcc: [`${seller}`, `${lastbidder}`],
                from: 'aution15.hcmus@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `Product ${ProName} has been bid success ful by ${bidder} with ${CurPrice}`,
                html: `<strong>Product ${ProName} has been bid success ful by ${bidder} with ${CurPrice}</strong>`,
            },
            {
                to: 'customer@gmail.com',
                bcc: [`${bidder}`],
                from: 'aution15.hcmus@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `You has been bid product ${ProName} success with ${CurPrice}`,
                html: `<strong>You has been bid product ${ProName} success with ${CurPrice}</strong>`,
            },
        ]
        return msg;
    },
    biddeny: (bidder, ProName, CurPrice) => {
        const msg = {
            to: 'customer@gmail.com',
            bcc: [`${bidder}`],
            from: 'aution15.hcmus@gmail.com',
            subject: 'Bid Fail',
            text: `Bid item ${ProName} with ${CurPrice} Fail`,
            html: `<strong>Bid item ${ProName} with ${CurPrice} Fail</strong>`,
        };
        return msg;
    },
    bidfinish: (seller, bidder, ProName, CurPrice) => {
        const msg = [{
                to: 'customer@gmail.com',
                bcc: `${seller}`,
                from: 'aution15.hcmus@gmail.com',
                subject: `Sell Item ${ProName} success`,
                text: `Your item "${ProName}" has been sold successful with price ${CurPrice}`,
                html: `<strong>Your item "${ProName}" has been sold successful with price ${CurPrice}</strong>`,
            },
            {
                to: 'customer@gmail.com',
                bcc: `${bidder}`,
                from: 'aution15.hcmus@gmail.com',
                subject: `Bid item ${ProName} success`,
                text: `Bid item ${ProName} with ${CurPrice} Successful\n Your item will ship to you in few nextdays.\n Thanks you for use our service.`,
                html: `<strong>Bid item ${ProName} with ${CurPrice} Successful\n Your item will ship to you in few nextdays.\n Thanks you for use our service.</strong>`,
            },
        ]
        return msg;
    },
    forgotpw: (email) => {
        const msg = {
            to: 'customer@gmail.com',
            bcc: `${email}`,
            from: 'aution15.hcmus@gmail.com',
            subject: `[AUTION] FORGOT PASSWORD`,
            html: `<strong>Please use this link to get new password is here www.google.com</strong>`,
        }
        return msg;
    }
};