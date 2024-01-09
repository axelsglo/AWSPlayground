exports.clock = async(event) => {
    console.log('Clock fn running!');

    return {
        statusCode: 200,
        body: JSON.stringify(new Date())
    }
}