# diet_tracker

## Generate application client_id and client_secret
Doorkeeper::Application.create(name: "Android client", redirect_uri: "", scopes: "")

## Example curl command
curl -X POST -d "email=marcelomaidden@gmail.com" -d "password=57iqf68prj" -d "grant_type=password" -d "client_id=secret_uid" -d "client_secret=secret_key" http://localhost:3000/oauth/token


## Acknowledgments
[https://unsplash.com/@sigmund]@sigmund - Unsplash (Carbohydrate photo)
[https://unsplash.com/@tempestdesigner]@tempestdesigner - Unsplash (Protein photo)
[https://unsplash.com/@enginakyurt]@enginakyurt - Unsplash (Fat photo)
[https://br.depositphotos.com/]Deposit photos
