const config = require('../config/default.json');
module.exports = {
    bidsuccess: (seller, bidder, lastbidder, ProName, CurPrice) => {
        const msg = [{
                to: 'customer@gmail.com',
                bcc: `${lastbidder}`,
                from: 'aution15.hcmus@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `Product "${ProName}" has been set a new price by ${bidder} with ${CurPrice}`,
                html: `<h5>Hi ${lastbidder},</h5>
                       <strong>Product "${ProName}" has been bid success ful by ${bidder} with ${CurPrice}.</strong>`,
            },
            {
                to: 'customer@gmail.com',
                bcc: `${seller}`,
                from: 'aution15.hcmus@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `Product ${ProName} has been set a new price by ${bidder} with ${CurPrice}`,
                html: `<h5>Hi ${seller},</h5>
                       <strong>Product "${ProName}" has been bid success ful by ${bidder} with ${CurPrice}.</strong>`,
            },
            {
                to: 'customer@gmail.com',
                bcc: [`${bidder}`],
                from: 'aution15.hcmus@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `You have successfully set the price for product "${ProName}" for ${CurPrice} vnd`,
                html: `<h5>Hi ${bidder},</h5>
                       <strong>You have successfully set the price for product "${ProName}" for ${CurPrice} vnd.`,
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
                text: `Your "${ProName}" product has been successfully auctioned for ${CurPrice} vnd`,
                html: `<h5>Hi ${seller},</h5>
                       <strong>Your "${ProName}" product has been successfully auctioned for ${CurPrice} vnd.`,
            },
            {
                to: 'customer@gmail.com',
                bcc: `${bidder}`,
                from: 'aution15.hcmus@gmail.com',
                subject: `Bid item ${ProName} success`,
                text: `Bid item ${ProName} with ${CurPrice} Successful\n Your item will ship to you in few nextdays.\n Thanks you for use our service.`,
                html: `<h5>Hi ${bidder},</h5>
                       <strong>You have successfully auctioned "${ProName}" products for ${CurPrice} vnd.</strong>
                       <strong>Your product will ship to you in few nextdays.</strong>
                       <strong>Thanks you for use our service.</strong>`,
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
            html: `<strong>Please use this link to get new password</strong>`,
        }
        return msg;
    }
};