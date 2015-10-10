# Conclusion

### To run the application

    # if you have node -v < 4
    npm install -g n
    n latest
    
    # to run the app itself
    npm install
    npm start
    
    # then go to browser and open localhost:3000
  

### Thoughts

So I wasn’t able to create observable version in 4 hours (there is a commit of this state though),
so the final version of the app is 5 hours checkin. I lost much time on ramda (turned out that
it’s really different from underscore, not only in terms “params first, data last”, but in terms of its api too.
I blame myself for choosing it over lodash that I know well and getting hurt each time it was behaving
not the way I thought). And lost time on redux helper (i wrote it at work a couple of days ago for
reducing boilerplate when writing actions and reducers. I wrote it with lodash and tried to quickly
port it to ramda and then through the marathon was getting bugs from it).

Another thought that I understood when I ended is that I need no wishlist or details reducer,
because it turned out a bit of ugly to pass props from one container to other. I could just `connect()`
wishlist to changes of `state.app.wishlist` and get data from there. The need of separate reducer arise
only when you get data from somewhere (server or something), in my case I wanted to separate concerns
of pages, but had a little luck with it.

**UPD:** actually, no, I was doing right, I just wrongly wired app actions. In curiosity I’m continuing this app development and newest versions are in the [“beyond” branch](https://github.com/kibin/debijenkorf/tree/beyond).

So let’s conclude: I was able to create main container, its actions and reducer in time.
And wishlist container with part of actions (checking/deleting) and reducer (no need in it though).
Wishlist has two working actions now (aside fetching data): check/uncheck items (one/all) and delete items (one/all)

Oh, and styles are really, really ugly.

### Bugs!

I now discovered a bug (that I think is caused of passing props): if you open the app
with default route and go to verlanglijst you won’t be able to see the items.
To overcome it just reload the page on this route, so you go directly to /wishlist.
