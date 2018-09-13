import React from 'react';

// handleOnHover = (e) => {
//   alert('test: ' + e.name);
// };

const Navbar = (brandName, {menuItems}) => {
  return (
    <div className={'navbar'}>
      <h3>{brandName}</h3>
      <ul>
        {
          menuItems.map((item, idx) =>
            <li key={idx}>{item.id} : {item.name}</li>
          )
        }
      </ul>
    </div>
  );
};

export default Navbar;
