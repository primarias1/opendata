require('dotenv').config();

module.exports = function (config) {
    // Copy all the assets files directly
    config.addPassthroughCopy("./src/assets");
    config.setLiquidOptions({
        dynamicPartials: true
    });

    config.addLiquidFilter("currency", function(number) {
        var formatter = new Intl.NumberFormat('ro-RO', {
            style: 'currency',
            currency: 'RON',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return formatter.format(number);
    });

    return {
        dir: {
            // Use the `src` folder as the default root folder when building
            // the site.
            input: "src",
            includes: "_includes",
            // Output the static site to a `dist` folder.
            output: "release"
        },

        // Use the Liquid templating engine. Maybe switch to njk later?
        templateFormats: ["liquid", "md", "11ty.js"],
        htmlTemplateEngine: "liquid",
        passthroughFileCopy: true
    }
};