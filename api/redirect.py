import requests
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # The target tracking URL
        target_url = 'https://xmaaubb.bid/cl/7c783b43c8b3cc6c'
        
        # Chrome User-Agent
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        
        try:
            # Make request to tracking URL with Chrome user agent
            response = requests.get(target_url, headers=headers, allow_redirects=True)
            
            # Get the final URL after any redirects
            final_url = response.url
            
            # Redirect user to the final destination
            self.send_response(302)
            self.send_header('Location', final_url)
            self.end_headers()
            
        except Exception as e:
            # If something fails, redirect directly
            self.send_response(302)
            self.send_header('Location', target_url)
            self.end_headers()
        
        return
