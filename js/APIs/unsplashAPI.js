async function unsplashAPIGET(queryName, queryLocation){
    /*
     * Clean the data up
     */
    // Step 1: Trim the outsides
    queryName = queryName.trim();
    queryLocation = queryLocation.trim();
    // Step 2: Replace all white space with dashes
    queryName = queryName.replace(/\s+/g, '-').toLowerCase();
    queryLocation = queryLocation.replace(/\s+/g, '-').toLowerCase();
    // Step 3: Combine the Destination name and Location with %2
    const query = `${queryName}%2C${queryLocation}`;
    const UNSPLASH_API_KEY = 'IkAqe80mBCnusMn2h9ZcDgHqEhVQQ-5JeumBxjztgME';
    let url = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=${query}`;
    

    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url)
        request.responseType = 'text';
        // Check to see if the request was successful
        request.onload = function() {
            if (request.status === 200) {
                // If successful, resolve the promise by passing back the request response
                var jsonResult = JSON.parse(this.responseText);
                resolve(jsonResult);
            } else {
                // If it fails, reject the promise with an error message
                reject(Error('JSON didnt load successfully; error code: ' + request.statusText));
            }
        }
        // Send the request
        console.log("Trying to send the request")
        request.send();
    });
}
export { unsplashAPIGET }