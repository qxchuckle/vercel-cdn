{
    "version": 2,
    "routes": [
        {
            "src": "/(.*)",
            "dest": "cdn.jsdelivr.net",
            "headers": {
                "cache-control": "ms-maxage=1000"
            }
        }
    ]
  }
