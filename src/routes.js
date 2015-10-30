import { Route, IndexRoute } from 'react-router'

import { ConnectedApp, ConnectedWishlist, ConnectedDetails } from './containers'
import { DetailsEdit } from './components'

export default (
  <Route path="/" component={ConnectedApp}>
    <IndexRoute component={ConnectedDetails} />
    <Route path="wishlist" components={ConnectedWishlist} />
    <Route path="details" component={ConnectedDetails}>
      <Route path="edit" component={DetailsEdit} />
    </Route>
  </Route>
)
