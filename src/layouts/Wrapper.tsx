  
import type { ReactNode } from "react";

import CustomCursor from "../common/CustomCursor"
import BackToTop from "../common/BackToTop";

interface WrapperProps {
  children: ReactNode
}


export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <CustomCursor />
      {children}
      <BackToTop />
    </>
  )
}
