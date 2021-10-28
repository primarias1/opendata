const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESS_TOKEN
});

module.exports = function () {
    return client
        .getEntries({content_type: 'institution', order: 'sys.createdAt'})
        .then(function (response) {
            const page = response.items.map(function (page) {
                return page.fields;
            });
            return page;
        })
        .catch(console.error);
};
