import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DepositMoney from './pages/DepositMoney'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import WithDrawMoney from './pages/WithDrawMoney'
import TransferMoney from './pages/TransferMoney'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from 'react-hot-toast'
import AuthPage from './pages/AuthPage'
import RedirectPage from './pages/RedirectPage'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthPage />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/deposit' element={<DepositMoney />} />
            <Route path='/withdraw' element={<WithDrawMoney />} />
            <Route path='/transfer' element={<TransferMoney />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route element={<RedirectPage to={'/'} />}>
            <Route path='/signin' element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
