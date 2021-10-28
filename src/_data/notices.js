const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESS_TOKEN
});

module.exports = function () {
    return client
        .getEntries({content_type: 'notice', order: 'sys.createdAt'})
        .then(function (response) {
            const items = response.items;
            const notices = items.map((item) => {
                const props = item.fields;

               return {
                   name: props.name,
                   value: props.value,
                   code: props.code,
                   type: props.type,
                   procedureType: props.procedureType,
                   url: props.url,
                   buyer: {
                       name: props.buyer.fields.name,
                       shortName: props.buyer.fields.shortName
                   }
               };
            });

            return notices;
        })
        .catch(console.error);
};