function formatJoiValidationErrors(joiError) {
    let errors = [];

    //console.log(JSON.stringify(result.error.details));

    if (joiError) {
        joiError.details.forEach(function(detail) {
            errors.push(detail.message);
        });
        return errors;
    };
}

module.exports = formatJoiValidationErrors;