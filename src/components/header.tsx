import React, { useState } from "react";

import { Content, ToggleIcon, FloatHeader } from "../styles/components/header";

const Header = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <FloatHeader isOpen={openMenu}>
      <Content>
        <div>
          <h3>MAARK</h3>
        </div>
        <div className="menu" onClick={() => setOpenMenu((prev) => !prev)}>
          <ToggleIcon isOpen={openMenu} />
        </div>
      </Content>
      {openMenu && (
        <a href="#myself" onClick={() => setOpenMenu(false)}>
          Olá
        </a>
      )}
      {!openMenu && <div className="children-content">{children}</div>}
    </FloatHeader>
  );
};

export default Header;
