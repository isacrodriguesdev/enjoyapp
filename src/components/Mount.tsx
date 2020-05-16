import React, { Component } from 'react';
// imports
// types
// components

type Props = {
   render: any,
   children: any
};

function Mount(props: Props) {
   
   return props.render ? props.children : null;
}

export default Mount;
