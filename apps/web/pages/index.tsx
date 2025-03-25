import Image from "next/image";
import styles from "../app/styles/page.module.css";

export default function Home() {
  return (
    <div className={`${styles.page} min-h-screen w-full m-0 p-0 flex items-center justify-center`}>
      {/* Login Box */}
      <div className={styles.loginBox}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/logo/msi_facturas_300x254.gif"  // Assuming your logo is in the logo folder
            alt="Company Logo"
            width={75}
            height={75}
            priority
          />
        </div>

        {/* Login Form */}
        <form className={styles.loginForm}>
          {/* Username Input */}
          <div className={styles.loginInputUsername}>
            <label htmlFor="username" className={styles.loginLabel}>
              Username
            </label>
            <input
              type="text"
              id="username"
              className={styles.loginInput}
            />
          </div>

          {/* Password Input */}
          <div className={styles.loginInputPassword}>
            <label htmlFor="password" className={styles.loginLabel}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.loginInput}
            />
          </div>
        </form>

        <div className={styles.buttonGroup}>
          {/* Login Button */}
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.loginButton}
            >
              Sign In
            </button>
          </div>
          
          {/* Forgot Password Link */}
          <a href="#" className={styles.forgotPassword}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
} 