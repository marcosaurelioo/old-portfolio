import React, { useState } from "react";
import Link from "next/link";

import {
  Content,
  ToggleIcon,
  FloatHeader,
  OpenedMenu,
} from "../styles/components/header";

const Header = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState<any>(undefined);

  return (
    <FloatHeader isOpen={openMenu}>
      <Content>
        <div>
          <h3 className="glitch" data-text="MAARK">
            MAARK
          </h3>
        </div>
        <div
          className="menu"
          onClick={() => setOpenMenu((prev: boolean) => !prev)}
        >
          <ToggleIcon isOpen={openMenu} />
        </div>
      </Content>
      {openMenu && (
        <OpenedMenu>
          <div className="content">
            <div>
              <Link href="#myself">
                <h1 onClick={() => setOpenMenu(false)}>About-me</h1>
              </Link>
              <Link href="#works">
                <h1 onClick={() => setOpenMenu(false)} className="spacing">
                  Works
                </h1>
              </Link>
              <Link href="https://github.com/Maark007">
                <a target="_blank" className="reset">
                  <h1 className="spacing">Github</h1>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/marcos007/">
                <a target="_blank" className="reset">
                  <h1 className="spacing">Linkedin</h1>
                </a>
              </Link>
            </div>
          </div>
        </OpenedMenu>
      )}
      {!openMenu && <div className="children-content">{children}</div>}
    </FloatHeader>
  );
};

export default Header;
