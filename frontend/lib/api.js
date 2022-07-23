export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = `${getStrapiURL(path)}${
    path.includes("?") ? "&" : "?"
  }populate=*`
  const response = await fetch(requestUrl, {
    method: `GET`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  })
  const data = await response.json()
  return data.data
}
