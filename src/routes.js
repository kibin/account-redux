import { Route, IndexRoute } from 'react-router'

import { ConnectedApp } from 'modules'
import { ConnectedWishlist, ConnectedDetails, DetailsEdit, } from 'pages'

export default (
  <Route path='/' component={ConnectedApp}>
    <IndexRoute component={ConnectedDetails} />
    <Route path='wishlist' components={ConnectedWishlist} />
    <Route path='details' component={ConnectedDetails}>
      <Route path='edit' component={DetailsEdit} />
    </Route>
  </Route>
)
