import { Footer } from "../Footer"
import { Header } from "../Header"

import { LayoutContainer } from "./styles"


export const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <LayoutContainer>
      {children}
      </LayoutContainer>
      <Footer />
    </>
  )
}