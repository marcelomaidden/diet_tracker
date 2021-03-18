# diet_tracker

## Generate application client_id and client_secret
Doorkeeper::Application.create(name: "Android client", redirect_uri: "", scopes: "")

## Example curl command
curl -X POST -d "email=marcelomaidden@gmail.com" -d "password=57iqf68prj" -d "grant_type=password" -d "client_id=secret_uid" -d "client_secret=secret_key" http://localhost:3000/oauth/token


