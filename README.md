# uge45opgaver

Security SPA
Answer these questions before you continue:

Did this logout involve the server
- No the logout didn't touch the backend server at all, all it did was remove our access token from the browsers local storage and returned us to the login view.

Is the token (if kept somewhere, still valid?)
- I believe the token is still present in the network console under it's headers. 

If your  answer to the question above was yes, is this a problem?, and if, how could it have been solved?
- Im not sure if it's a problem, because the network presence would only between my pc and the frontend server.
However there could be people using packet sniffers that might be able to acces it, without being 100% confident in this
