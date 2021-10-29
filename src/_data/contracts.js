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
                        title: seller.fields.title,
                        shortTitle: seller.fields.shortTitle,
                        fiscalCode: seller.fields.fiscalCode
                    };
                });

                const documents = props.documents.map((document) => {
                    return {
                        url: document.fields.file.url,
                        title: document.fields.title
                    };
                });

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
                    sellers: sellers,
                    documents: documents
                };
            });

            return contracts;
        })
        .catch(console.error);
};
