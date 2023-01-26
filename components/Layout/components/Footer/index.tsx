import React from "react";
import Image from "next/image";
import Wrapper from "../../../Wrapper";

import styles from "./style.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <Image alt="logo" src="/logo.svg" width={64} height={62} />
          </div>
          <span className={styles.copyright}>© Copyright 2023</span>
        </div>
        <span className={styles.site}>Octopus - CashBack Browser</span>
      </Wrapper>
    </div>
  );
}

export default Footer;
