import React from "react";
import Link from "next/link";

import styles from "../../styles/Home.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href='/' className='link'>
        <h2>site name</h2>
      </Link>
      <Link href='/practice' className='link'>
        practice
      </Link>
      <Link href='/resources' className='link'>
        resources
      </Link>
      <Link href='/schedule' className='link'>
        schedule
      </Link>
      <Link href='/about' className='link'>
        about
      </Link>
    </div>
  );
}
