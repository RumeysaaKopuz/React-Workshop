import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="" />
        <Dropdown pointing="top left" text="Özge">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

export default SignedIn;
