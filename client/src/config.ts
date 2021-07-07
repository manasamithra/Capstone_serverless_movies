const apiId = '1rxzaeue01'
const region = 'us-east-1'
const devPort = '3050'

export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`
export const devapiEndpoint = `http://localhost:${devPort}/dev`
export const subDirectory = 'Events'

export const authConfig = {
  domain: 'manasa-dev.us.auth0.com',
  clientId: 'hsYG8H4Y0WdFT6gxEChu3zxFYmOyQbZR',
  callbackUrl: 'http://localhost:3000/callback'
}
