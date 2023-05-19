/* eslint-disable react/no-unescaped-entities */

const Blog = () => {
  
  return (
    <div>
      <div className="mx-10 mt-10">
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: Access tokens are used for authentication and grant access to protected resources, while refresh tokens are used to obtain new access tokens when they expire. Access tokens are included in API requests, while refresh tokens are securely stored on the client-side. Access tokens have a limited lifespan, and refresh tokens are long-lived but also expire. On the client-side, access tokens can be stored in HttpOnly cookies or secure storage mechanisms like local storage or session storage, while refresh tokens should not be stored in cookies. It's crucial to implement security measures to prevent unauthorized access or token leakage.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: Compare SQL and NoSQL databases?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: SQL databases are structured, enforcing predefined schemas, and supporting ACID transactions. They excel in handling structured data and complex relationships. NoSQL databases are flexible, with dynamic schemas and high scalability for unstructured or semi-structured data. They prioritize performance over strict consistency and often have their own query languages. The choice between SQL and NoSQL depends on the application's requirements, data structure, and scalability needs.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: What is express js? What is Nest JS?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: Express.js is a lightweight web application framework for Node.js, offering flexibility and simplicity in building applications and APIs. It allows developers to define routes, middleware, and handlers according to their needs. Nest.js, on the other hand, is a scalable and opinionated framework for building server-side applications with Node.js. It leverages TypeScript and follows modular architecture principles, promoting code reusability and maintainability. Both frameworks cater to different preferences and project requirements, providing options for developers to choose from.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: What is MongoDB aggregate and how does it work?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: MongoDB's aggregate function is used for advanced data analysis and transformation on document collections. It operates on a pipeline of stages, where each stage performs specific operations like filtering, grouping, sorting, and projecting fields. The stages are executed sequentially, allowing for flexible data manipulation and transformation. The result of the aggregate function is the output of the pipeline, which can be a single document or a collection of documents. It offers powerful capabilities for data analysis and reporting in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
