import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrumb1 = ({page}) =>{
    return (
        <div>
 <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>{page}</Breadcrumb.Item>
</Breadcrumb>
        </div>
    )
}

export default Breadcrumb1;