# debijenkorf

The small account page application I am about to do will consist of
* main container (with navigation buttons on the left)

and two child pages:
* wishlist
* personal details (which will break to another two pages “edit” and “view”)

### As for technologies:
* The view layer will be made with react which gives fast declarative prototyping
* Data management will be implemented with redux which gives nice clean way to build unidirectional data flow with pure reducers and simple actions
* Routing with react-router
* Other things: babel and webpack for transpiling and bundling, ramdajs as utility, stylus (and its ecosystem) for styles

### The structure as follows:
Main view container will consist of sidebar which will handle routes (just a bunch of <Link to="">) and main content which will be controlled by react-router component.

In main content there will be two changing each other: wishlist and personal details (with two changing each other routes two). Both will be so-called containers — controllers that have no representation but have all the controlling logic. The three view components (view for wishlist, edit and view for personal details view) will be so-called dumb components that get all the logic and params from props and just use it.

For the data handling each container will have a reducer function that will change state of the app and bunch of actions for controlling application ..erm.. actions.

#### Low level implementation details:
From top to bottom:
* Main container: simple and dumb. Consists of:
  * sidebar (with two links to wishlist page and personal details view page)
  * children components (that are provided by react router)
* Wishlist: smart component. Connected to store by wishlistItems key. And dumb components in it:
  * Header
  * List of items
    * Item (its data representation is as follows: { isSelected: bool, data: obj })
  
  It also has reducer which handles actions:
    * select all/none: map items, change isSelected to true/false and add/delete skus to/from selected array
    * add selected to basket: filter that are selected and send ajax request with skus (+ 3 actions for request, success, fail)
    * remove all items: map all items to get skus and send ajax with skus
    * email wishlist: same as above
    * etc. Item actions are the same only for particular items

* Personal details: smart component. Connected to store with selected keys for profile page, has children provided by react router. Has dumb components:
  * Header
  * children components (from react router):
    * view (displays data and has link to edit)
    * edit (consists of `<Input />` and `<Button />` components)
  
  Has reducer which handles actions:
    * edit field
    * save all: maps fields, merges with existing information and sends ajax with information to server

### Limitations:
* Fetching data will be implemented through fakeAjax calls (just a promise with 100-300 ms delay)
* API is mocked and thought up
* No nodejs layer (in ideal world with much more time there should be universal app that handle first request on server and renders page to user [or robots], then frontend takes care of the rest)
* Poor css — because 4hrs
* I will add grunt work (setting up babel, webpack and other dependencies) in count when will start count the time, but will stop after 4 hours of actual app creating.
