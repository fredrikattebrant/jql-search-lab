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
            const json = await response.json();
            console.log("Filter response:", json);

            const jql = json.jql;
            const jqlUrl = `/rest/api/3/search/jql?jql=${jql}`;
            const jqlResponse = await requestJira(jqlUrl, options);
            const jqlJson = await jqlResponse.json();
            console.log(jqlJson);
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
