import React from 'react';
import { numbers } from './data/numbers';
import { Key } from './key/Key';
export function Keyboard() {
    return (
        <>
            <ol className="keyboard">
                {numbers.map((item) => (
                    <li key={item}>
                        <Key item={item}></Key>
                    </li>
                ))}
            </ol>
        </>
    );
}
