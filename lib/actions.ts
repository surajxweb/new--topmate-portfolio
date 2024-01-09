"use server";

const { request } = require("graphql-request");

export async function fetchProjects(size: number) {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
        query MyProjects {
            projects(orderBy: priorityOrder_ASC, first: ${size}) {
              id
              projectImage {
                url
              }
              projectDescription
              projectName
              siteurl
              codeurl
              techUsed
            }
          }
        `;

  try {
    const projectsResponse = await request(endpoint, query);
    return projectsResponse.projects;
  } catch (e) {
    console.log("Failed to fetch Best Selling Products - ", e);
    return null;
  }
}
