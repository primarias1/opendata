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

                const sellers = props.sellers.map((seller) => {
                    return {
                        name: seller.fields.name,
                        shortName: seller.fields.shortName,
                        fiscalCode: seller.fields.fiscalCode
                    };
                });

                const documentUrls = props.documents.map((document) => {
                    return document.fields.file.url;
                });

                return {
                    name: props.name,
                    value: props.value,
                    signingDate: props.signingDate,
                    startDate: props.startDate,
                    endDate: props.endDate,
                    buyer: {
                        name: props.buyer.fields.name,
                        shortName: props.buyer.fields.shortName
                    },
                    sellers: sellers,
                    documentUrl: documentUrls[0]
                };
            });

            return contracts;
        })
        .catch(console.error);
};
