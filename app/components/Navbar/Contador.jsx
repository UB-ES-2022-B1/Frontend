import React, { Component } from 'react';
import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react'
export const Contador = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }


    return (
        <Flex>
            <Button variant='outline' borderRadius={40} disabled={count <= 1} onClick={decrease}>-</Button>{' '}
            <Button variant='ghost' disabled={true}>{count}</Button>
            <Button variant='outline' borderRadius={40} disabled={count > 16} onClick={increase}>+</Button>{' '}
        </Flex>
    );
}
export default Contador;
