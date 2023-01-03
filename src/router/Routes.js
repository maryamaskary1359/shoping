import React from 'react'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createHistrory from "history/createBrowserHistory"
import { MainLayout, ManagementLayout } from '../layout/index.layout'
import {
  ShoppingCart,
  SignIn,
  Products,
  Quantity,
  Orders,
  MainCustomers,
  ProductDetails,
  ProductsList,
  PaymentResult,
  Checkout
} from '../pages/index.pages'

import { Error } from '../components/index.components';





const Routes = () => {
  const location = createHistrory()
  return (
    <Router
      history={location}
    >

      <Switch>

        <Route path='/home' exact >
          <MainLayout >
            <MainCustomers />
          </MainLayout>
        </Route>

        <Route path='/home/cart' exact >
          <MainLayout >
            <ShoppingCart />
          </MainLayout>
        </Route>

        <Route path='/home/products/:group/:subgroup/:id' exact>
          <ProductDetails />
        </Route>

        <Route path='/home/:group' exact >
          <MainLayout >
            <ProductsList />
          </MainLayout>
        </Route>

        <Route path='/home/:group/:subgroup' exact>
          <MainLayout >
            <ProductsList />
          </MainLayout>
        </Route>

        <Route path='/home/:group/:subgroup/:id' exact>
          <MainLayout >
            <ProductsList />
          </MainLayout>
        </Route>

        <Route path='/payment-result/:status/:number/:id' exact>
          <MainLayout >
            <PaymentResult />
          </MainLayout>
        </Route>


        <Route path='/checkout' exact >
          <Checkout />
        </Route>





        <Route path='/panel/login' exact >
          <SignIn />
        </Route>

        <Route path='/panel/products' exact>
          <ManagementLayout>
            <Products />
          </ManagementLayout>
        </Route>


        <Route path='/panel/products/:id' exact>
          <ManagementLayout>
            <Products />
          </ManagementLayout>
        </Route>

        <Route path='/panel/quantity' exact>
          <ManagementLayout>
            <Quantity />
          </ManagementLayout>
        </Route>


        <Route path='/panel/quantity/:id' exact>
          <ManagementLayout>
            <Quantity />
          </ManagementLayout>
        </Route>


        <Route path='/panel/orders' exact >
          <ManagementLayout>
            <Orders />
          </ManagementLayout>
        </Route>

        <Route path='/panel/orders/:id' exact>
          <ManagementLayout>
            <Orders />
          </ManagementLayout>
        </Route>




        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/' >
          <Error>
            <h4>۴۰۴ <br></br>صفحه مورد نظر پیدا نشد</h4>
          </Error>
        </Route>


      </Switch>
    </Router>
  )
}

export { Routes }
