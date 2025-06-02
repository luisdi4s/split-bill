'use client';
import { useState } from "react";
import "./page.scss"

import NewBillComponent from "@/components/NewBillComponent";
import EnterExistingBillComponent from "@/components/EnterExistingBillComponent";
import Header from "@/components/Header";

export default function Home() {

  const [inCreationMode, setCreationMode] = useState<boolean>(false);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />

      <Header />

      <div className="page-body">
        <div className="page-boxes-container">
          <NewBillComponent inCreationMode={inCreationMode} setCreationMode={setCreationMode}/>

          {
            !inCreationMode && <EnterExistingBillComponent />
          }
          
        </div>
      </div>
          
      
    </div>
  );
}
