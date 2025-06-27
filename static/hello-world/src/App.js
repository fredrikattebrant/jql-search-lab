import React, { useEffect, useState } from 'react';
import { invoke, requestJira } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    useEffect(async () => {
        try {
            const filterId = 10663;
            const filterUrl = `/rest/api/3/filter/${filterId}`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await requestJira(filterUrl, options);
            const filterResult = await response.json();
            console.log("Filter response:", filterResult);
            console.log("Filter jql:", filterResult.jql);

            const jql = filterResult.jql;
            const jqlUrl = `/rest/api/3/search/jql?jql=${jql}`;
            const searchResponse = await requestJira(jqlUrl, options);
            const searchResult = await searchResponse.json();
            console.log("Search results", searchResult);
          } catch (error) {
            console.error(error);
          }
    }, []);

    return (
        <div>
            <b>JQL tests</b>
        <div>
            {data ? data : 'Loading...'}
        </div>
        </div>
    );
}

export default App;
