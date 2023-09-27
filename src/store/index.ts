import { CreateStore, applyMiddleware } from 'redux'

export const store = CreateStore({}, applyMiddleware(thun))
