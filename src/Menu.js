import React, { useContext } from 'react';
import { MyContext } from '.';

const Menu = () => {
  const { state, setState } = useContext(MyContext);
  return (
    <div className="menu">
      <div className="svg-container">
        <div className='icon-btn' onClick={() => {
          setState({})
        
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA3323"><path d="M447.33-122Q325-133.67 242.5-224.5 160-315.33 160-439.33q0-73.34 32.33-138.84 32.34-65.5 91-109.16L331-639.67q-50 33.34-77.17 86.67-27.16 53.33-27.16 113.67 0 96 62.66 167.16 62.67 71.17 158 83.5V-122Zm66.67 0v-66.67q95.67-13.33 157.83-84Q734-343.33 734-439.33q0-106-73.67-179.67-73.66-73.67-179.66-73.67h-14.34L521-638l-47.33 47.33L338.33-726l135.34-135.33L521-814l-54.67 54.67h14.34q134 0 227 93.33t93 226.67q0 123.66-82.17 214.5Q636.33-134 514-122Z" /></svg>
        </div>
      </div>
    </div>
  );
}

export default Menu;
