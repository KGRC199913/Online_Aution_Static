const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
module.exports = {
    bidsuccess: (seller, bidder, lastbidder, ProName, CurPrice) => {
        const msg = [{
                to: `${lastbidder}`,
                from: 'aution152020@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `Product "${ProName}" has been set a new price by ${bidder} with ${CurPrice}`,
                html: `<h5>Hi ${lastbidder},</h5>
                       <strong>Product "${ProName}" has been bid success ful by ${bidder} with ${CurPrice}.</strong>`,
            },
            {
                to: `${seller}`,
                from: 'aution152020@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `Product ${ProName} has been set a new price by ${bidder} with ${CurPrice}`,
                html: `<h5>Hi ${seller},</h5>
                       <strong>Product "${ProName}" has been bid success ful by ${bidder} with ${CurPrice}.</strong>`,
            },
            {
                to: `${bidder}`,
                from: 'aution152020@gmail.com',
                subject: `${ProName} Bid successful`,
                text: `You have successfully set the price for product "${ProName}" for ${CurPrice} vnd`,
                html: `<h5>Hi ${bidder},</h5>
                       <strong>You have successfully set the price for product "${ProName}" for ${CurPrice} vnd.`,
            },
        ];
        console.log(msg);
        sgMail.send(msg);
    },
    biddeny: (bidder, ProName, CurPrice) => {
        const msg = {
            to: `${bidder}`,
            from: 'aution152020@gmail.com',
            subject: 'Bid Fail',
            text: `Bid item ${ProName} with ${CurPrice} Fail`,
            html: `<strong>Bid item ${ProName} with ${CurPrice} Fail</strong>`,
        };
        console.log(msg);
        sgMail.send(msg);
    },
    bidfinish: (seller, bidder, ProName, CurPrice) => {
        const msg = [{
                to: `${seller}`,
                from: 'aution152020@gmail.com',
                subject: `Sell Item ${ProName} success`,
                text: `Your "${ProName}" product has been successfully auctioned for ${CurPrice} vnd`,
                html: `<h5>Hi ${seller},</h5>
                       <strong>Your "${ProName}" product has been successfully auctioned for ${CurPrice} vnd.`,
            },
            {
                to: `${bidder}`,
                from: 'aution152020@gmail.com',
                subject: `Bid item ${ProName} success`,
                text: `Bid item ${ProName} with ${CurPrice} Successful\n Your item will ship to you in few nextdays.\n Thanks you for use our service.`,
                html: `<h5>Hi ${bidder},</h5>
                       <strong>You have successfully auctioned "${ProName}" products for ${CurPrice} vnd.</strong>
                       <strong>Your product will ship to you in few nextdays.</strong>
                       <strong>Thanks you for use our service.</strong>`,
            },
        ]
        console.log(msg);
        sgMail.send(msg);
    },
    forgotpw: (email) => {
        const msg = {
            to: `${email}`,
            from: 'aution152020@gmail.com',
            subject: `[AUTION] FORGOT PASSWORD`,
            html: `<strong>Please use this link to get new password</strong>`,
        }
        console.log(msg);
        sgMail.send(msg);
    }
};