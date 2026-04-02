# MTN Redirect Server

Node.js server that masks user agent to show Chrome in tracking.

## Deploy to Render.com

1. Push this folder to GitHub
2. Go to https://render.com
3. Create new "Web Service"
4. Connect your GitHub repo
5. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
6. Click "Create Web Service"
7. Copy your server URL (e.g., `https://your-app.onrender.com`)

## After Deployment

Copy your Render URL and update it in the Cloudpages HTML file:
```javascript
const serverUrl = 'https://YOUR-APP-NAME.onrender.com/redirect';
```

## Local Testing

```bash
npm install
npm start
```

Visit: http://localhost:3000/redirect

## How It Works

- Receives requests at `/redirect` endpoint
- Randomly selects a Chrome user agent
- Makes request with Chrome headers
- Redirects user to final destination
- Tracking sees "Chrome" instead of Facebook browser
