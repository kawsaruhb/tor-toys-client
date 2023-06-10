import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container mx-auto px-8 mb-8 bg-base-300 text-white rounded-lg'>

                <h1 className="mt-2 p-2 text-2xl font-bold"> 1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="ms-4 p-6 text-lg"><span className="font-bold ">Answer:</span> When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. <br /> For security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again. <br /> JWT can be used as an access token and/or a refresh token. Access tokens are used to access protected resources, such as an API, while refresh tokens are used to obtain new access tokens when the current access token expires. <br /> In web browser, you can store JWT in local/session storage or in cookie. Both have vulnerabilities. You can choose the one you prefer, but you should take the security as a whole to be secured and processes should be well designed.  </p>

                {/* <!-- Question - 2     --> */}
                <h1 className="mt-2 p-2 text-2xl font-bold"> 2.Compare SQL and NoSQL databases?</h1>
                <p className="ms-4 p-6 text-lg"><span className="font-bold">Answer:</span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                {/* <!-- Question - 3     --> */}
                <h1 className="mt-2 p-2 text-2xl font-bold"> 3.What is express js? What is Nest JS?</h1>
                <p className="ms-4 p-6 text-lg"><span className="font-bold">Answer:</span> Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes. <br />NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.</p>

                {/* <!-- Question - 4     --> */}
                <h1 className="mt-2 p-2 text-2xl font-bold"> 4.What is MongoDB aggregate and how does it work?</h1>
                <p className="ms-4 p-6 text-lg"><span className="font-bold">Answer:</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <br /> One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. </p>
            </div>
        </div>
    );
};

export default Blogs;