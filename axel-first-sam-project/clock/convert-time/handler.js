exports.convertTime = async(event) => {
    console.log('Convert time was excecuted!');

    return {
        statusCode: 200,
        body: JSON.stringify(new Date())
    }
}