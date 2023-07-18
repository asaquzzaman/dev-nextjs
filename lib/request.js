export async function Post( url, query ) {
    const headers = { 'Content-Type' : 'application/josn' };

    const res = await fetch( url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify( query )
    } );

    // Recommendation: handle errors
    if ( !res.ok ) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const resJson = res.json();

    return resJson;
}