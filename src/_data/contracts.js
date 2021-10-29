const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESS_TOKEN
});

module.exports = function () {
    // Prefix the field with a minus to sort in reverse
    return client
        .getEntries({content_type: 'contract', order: '-fields.signingDate'})
        .then(function (response) {
            const items = response.items;

            const contracts = items.map((item) => {
                const props = item.fields;

                return {
                    name: props.name,
                    value: props.value,
                    signingDate: props.signingDate,
                    startDate: props.startDate,
                    endDate: props.endDate,
                    buyer: {
                        title: props.buyer.fields.title,
                        shortTitle: props.buyer.fields.shortTitle
                    },
                    seller: {
                        title: props.seller.fields.title,
                        shortTitle: props.seller.fields.shortTitle,
                        fiscalCode: props.seller.fields.fiscalCode
                    },
                    document: {
                        url: props.document.fields.file.url
                    }
                };
            });

            return contracts;
        })
        .catch(console.error);
};
