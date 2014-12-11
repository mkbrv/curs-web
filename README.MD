Csere Miklos

curs-web 2014, unitbv an II


Proiect final
single-page app: redirectare (rutare / filtrare)
login
friends_list (with search)
facebook   - permissions
					 - get friends
get locations
- google maps
single-page app: redirectare (rutare / filtrare)
login
friends_list (with search)
facebook   - permissions
					 - get friends
get locations
- google maps

            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me?accessToken=' + this.accessToken, function (response) {
                document.getElementById('content').innerHTML =
                    'Thanks for logging in, ' + response + '!';
                currentObject.currentUser = response;
            });

            FB.api('/me/photos?accessToken=' + this.accessToken, function (response) {
                console.log(response);
            });


                FB.api('/me/feed?message="I love bacon"&accessToken=' + this.accessToken,'post', function (response) {
                    console.log(response);
                });

                https://developers.facebook.com/docs/graph-api/reference

