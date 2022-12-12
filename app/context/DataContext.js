import React, { createContext, useState } from "react"
import Navbar from "~/components/Navbar/Navbar";
import { Divider } from '@chakra-ui/react'
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider>
            <Navbar></Navbar>
            <Divider />
            {children}
        </DataContext.Provider>
    )
}